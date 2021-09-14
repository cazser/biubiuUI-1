<template>
	<button class="biu-button"  :class="{[`icon-${iconPosition}`]:true}">
 	  <svg v-if="icon" class="icon">
           <use :xlink:href="`#icon-${icon}`"/>
          </svg>
	  <div class="content">
		<slot></slot>
	  </div>
	</button>
	
</template>
<script>
export default{
name:'button',
props:['icon', 'iconPosition']

};
</script>
<style scoped> 

.biu-button{
border: 1px solid var(--border-color);
height: var(--button-height);
font-size: var(--font-size);
background: var(--button-bg);
padding: 0 1em;
display: inline-flex;
    justify-content: center;
    align-items: center;
}

 .biu-button.icon-right >.icon{
	order:2;
     }   
.biu-button.icon-right >.content{
  order:1;
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

 .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
.biu-button.icon-left>.icon{
	order:1;
}
.biu-button.icon-left>.content{
	order: 2;
}

</style>