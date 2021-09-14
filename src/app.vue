<template>
  <div class='app'>
    <biu-button></biu-button>
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