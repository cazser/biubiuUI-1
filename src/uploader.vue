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
    let input = document.createElement('input');
    input.type="file";
    this.$refs.temp.appendChild(input);
  
    input.addEventListener("change", (e)=>{
      let file = input.files[0];
      setTimeout(()=>{console.log(file)}, 1000)
        var formData = new FormData();
        
        formData.append(this.name, file);
        var xhr = new XMLHttpRequest();
        xhr.open(this.method, this.action);
        xhr.onload = ()=> {
        //  console.log(typeof xhr.response);
        let url = this.parseResponse(xhr.response)
        this.url = url;
        };
        xhr.send(formData);
    })
    input.click();
}
}

};
</script>
<style scoped>
.uploader{

}


</style>