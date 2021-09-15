<template>
  <div class='app'>
   <biu-button-group>
     <biu-button icon="left">上一页</biu-button>
     <span>some</span>
     <biu-button icon="right">下一页</biu-button>
   </biu-button-group>
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
components: {"biu-button":Button}
};
</script>
<style scoped>
.app{
 padding: 2em;
}


</style>