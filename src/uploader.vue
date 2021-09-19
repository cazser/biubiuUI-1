<template>
	<div class="uploader">
 
  <div @click="onClickUpload">
    <slot></slot>
  </div>
  <div ref="temp" style="width:0;height:0;overflow:hidden;"></div>
  <footer>
    <slot name="tips"></slot>
  </footer>
</div>

</template>
<script>
export default{
name:'uploader',
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
        xhr.onload = function() {
          console.log(xhr.response);
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