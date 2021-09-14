<template>
  <div class='app'>
    <biu-button icon='settings' icon-position="right">
      我爱JS
     
    </biu-button>
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