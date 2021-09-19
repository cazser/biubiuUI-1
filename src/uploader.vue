<template>
	<div class="uploader">
 
  <div @click="onClickUpload">
    <slot></slot>
  </div>
  <div ref="temp" style="width:0;height:0;overflow:hidden;"></div>
  
  <ol v-if="fileList">
    <li v-for="file in fileList" :key="file.name+ Math.random()">
      <img :src="file.url" width="100" height="100"/> {{file.name}}
      <button @click="onRemoveFile(file)">x</button>
    </li>
  </ol>
  <footer>
    <slot name="tips"></slot>
  </footer>
</div>

</template>
<script>
export default{
name:'uploader',
data(){
  return{
    url: "about:blank"
  }
},
props:{
  name:{
    type: String,
    required: true
  },
  action:{
    type: String,
    required: true
  },
  method:{
    type: String,
    default: "POST"
  },
  parseResponse:{
    type: Function,
    required: true
  },
  fileList:{
    type: Array,
    default:()=>[]
  }
},
methods:{
  onClickUpload(){
    let input = this.createInput();
  
    input.addEventListener("change", (e)=>{
      let file = input.files[0];   
        this.uploadFile(file);
        input.remove();
     })

    input.click();
    
},
onRemoveFile(file){
  let answer = window.confirm('你确定要删除吗？')
  if(answer){
    let copy = [...this.fileList]
    let index = copy.indexOf(file);
    copy.splice(index,1);
    this.$emit('update:fileList', copy);
  }
},
createInput(){
  let input = document.createElement('input');
    input.type="file";
    this.$refs.temp.appendChild(input);
    return input;
},
uploadFile(file){
   let formData = new FormData();
    formData.append(this.name, file);
    let {name, type, size} = file;
    this.doUploadFile(formData, (response)=>{
      let url = this.parseResponse(response)
      this.url = url;
      this.$emit('update:fileList', [...this.fileList, {name, type, size, url}])
    });
 
},
doUploadFile(formData, success){
  let xhr = new XMLHttpRequest();
  xhr.open(this.method, this.action);
  xhr.onload = ()=> {
  //  console.log(typeof xhr.response);
  success(xhr.response)
 
  };
  xhr.send(formData);
}
}
};
</script>
<style scoped>
.uploader{

}


</style>