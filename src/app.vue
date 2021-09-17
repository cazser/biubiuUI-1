<template>
  <div class='app'>
    <biu-tabs selected="11">
      <biu-tabs-head>
        <biu-tabs-item name="11" type='item'>
            item1
          </biu-tabs-item>
         <biu-tabs-item name='12' type='item'>item2</biu-tabs-item>
         <biu-tabs-item name="item3" type="item">item3</biu-tabs-item>
      </biu-tabs-head>
      <biu-tabs-body>
        <biu-tabs-item name='11' type='pane'>pane1</biu-tabs-item>
        <biu-tabs-item name='12' type='pane'>pane2</biu-tabs-item>
        <biu-tabs-item name="item3" type="pane">
          <biu-button>11</biu-button>
        </biu-tabs-item>
      </biu-tabs-body>
    </biu-tabs>
    <biu-button>slot</biu-button>
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