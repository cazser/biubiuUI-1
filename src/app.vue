<template>
  <div class='app'>
    <biu-button icon='settings' icon-position="right">
      我爱JS
     
    </biu-button>
    <biu-button icon="settings" icon-position="left">
      我啊java
    </biu-button>
    <biu-button >
      ll
    </biu-button>
    <biu-icon name="loading"/>
  </div>
</template>
<script>
import Button from './button.vue'
export default{
name:'app',
components: {"biu-button":Button}
};
</script>
<style scoped>
.app{
 padding: 2em;
}


</style>