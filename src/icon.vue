<template>
	 <svg  class="biu-icon">
           <use :xlink:href="`#icon-${name}`"/>
          </svg>
</template>
<script>
export default{
name:'icon',
props:['name']

};
</script>
<style scoped>
 .biu-icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }

</style>