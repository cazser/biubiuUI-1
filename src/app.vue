<template>
  <div class='app'>
  <biu-button @click="showToast">安保部</biu-button> 
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
 this.$toast(`我是message我是message我是message我是messagee我是message我是messagee我是message我是messagee我是message我是messagee我是message我是messagee我是message我是messagee我是message我是messagee我是message我是messagee我是message我是messagee我是message我是messagee我是message我是messagee我是message我是messagee我是message我是messagee我是message我是message

 `,
 {
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