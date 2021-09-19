<template>
  <div class='app'>
  <biu-uploader accept="image/*"
              action="http://127.0.0.1:3000/upload"   name="file"
              :parseResponse="parseResponse">
      

  <template v-slot:default>
    <biu-button>上传</biu-button>
  </template>  
 
  <template v-slot:tips>
    <div>只能上传300kb以下的图片</div>
  </template>    
  </biu-uploader> 
  </div>
</template>
<script>
import Button from './button.vue'
export default{
name:'app',
data(){
  return{
    flag: true,
    fileList: []
  }
},
created(){
 
},
components: {"biu-button":Button},
methods:{
  showToast(){
 this.$toast(`
你的智商为${Math.random()}
 `,
 {
   position:'middle',
   closeButton:{
     text:"尝尝的关闭",
     callback:()=>{

     }
   }
 });
  },
  parseResponse(response){
    let object = JSON.parse(response)
    let url = `http://127.0.0.1:3000/preview/${object.id}`
    return url;
  }

}
};
</script>
<style scoped>
.app{
 padding: 2em;
}


</style>