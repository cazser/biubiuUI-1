<template>
  <div class='app'>
    <biu-tabs selected="11">
      <biu-tabs-head>
        <biu-tabs-item name="11">item1</biu-tabs-item>
         <biu-tabs-item name='12'>item2</biu-tabs-item>
      </biu-tabs-head>
      <biu-tabs-body>
        <biu-tabs-pane name='11'>pane1</biu-tabs-pane>
        <biu-tabs-pane name='12'>pane2</biu-tabs-pane>
      </biu-tabs-body>
    </biu-tabs>
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