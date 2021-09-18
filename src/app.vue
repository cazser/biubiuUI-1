<template>
  <div class='app'>
  <biu-uploader accept="image/*"
              action="path"   name="name">
      

  <template v-slot:default>
    <p>Here's some contact info</p>
  </template>  
  <template v-slot:header>
    <div>nn</div>
  </template> 
  <template v-slot:footer>
    <span>footer</span>
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
  }
}
};
</script>
<style scoped>
.app{
 padding: 2em;
}


</style>