<template>
	<button class="biu-button">
 	  <svg class="icon">
           <use :xlink:href="`#icon-${icon}`"/>
          </svg>
		<slot></slot>
	</button>
</template>
<script>
export default{
name:'button',
props:['icon']

};
</script>
<style scoped>
.biu-button{
border: 1px solid var(--border-color);
height: var(--button-height);
font-size: var(--font-size);
background: var( --button-bg);
padding: 0 1em;
        
}

.biu-button:hover{
	border-color: var(--border-color-hover);
}

.biu-button:active{
	background-color: var( --button-active-bg );
       
}

.biu-button:focus{
	outline: none;
}


</style>