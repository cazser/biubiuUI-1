<template>
  <div class='app'>
   <biu-collapse>
     <biu-collapse-item title="标题1">内容1</biu-collapse-item>
     <biu-collapse-item title="标题2">内容2</biu-collapse-item>
     <biu-collapse-item title="标题3"></biu-collapse-item>
   </biu-collapse> 
  </div>
</template>
<script>
import Button from './button.vue'
export default{
name:'app',
data(){
  return{
    flag: true
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