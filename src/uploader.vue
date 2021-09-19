<template>
	<div class="uploader">
 
  <div @click="onClickUpload">
    <slot></slot>
  </div>
  <div ref="temp" style="width:0;height:0;overflow:hidden;"></div>
  <img :src="url" ref="preview"/>
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
  }
},
methods:{
  onClickUpload(){
    let input = this.createInput();
  
    input.addEventListener("change", (e)=>{
      let file = input.files[0];
    
      let formData = new FormData();
      formData.append(this.name, file);
        this.uploadFile(formData);
    })
    input.click();
},
createInput(){
  let input = document.createElement('input');
    input.type="file";
    this.$refs.temp.appendChild(input);
    return input;
},
uploadFile(formData){
  var xhr = new XMLHttpRequest();
  xhr.open(this.method, this.action);
  xhr.onload = ()=> {
  //  console.log(typeof xhr.response);
  this.onSuccess(xhr.response)
 
  };
  xhr.send(formData);
},
onSuccess(response){
  let url = this.parseResponse(response)
  this.url = url;
}
}

};
</script>
<style scoped>
.uploader{

}


</style>