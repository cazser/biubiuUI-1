<template>
	<button class="biu-button"  :class="{[`icon-${iconPosition}`]:true}"
	>
	<biu-icon class="loading icon"  v-if="loading" name="loading"/>
	  <biu-icon  class="icon" v-if="icon && !loading" :name="icon"></biu-icon>
	  <div class="content">
		<slot></slot>
	  </div>
	</button>
	
</template>
<script>
export default{
name:'button',
props:{icon:{},
 iconPosition:{
	type: String,
	default: "left",
	validator(value){
		return !(value!=="left" || value!=='right')
	}
},
loading:{
	type: Boolean,
	default: false
}}

};
</script>
<style scoped> 

.biu-button{
border: 1px solid var(--border-color);
height: var(--button-height);
font-size: var(--font-size);
background: var(--button-bg);
padding: 0 1em;
vertical-align: middle;
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

 
.biu-button.icon-left>.icon{
	order:1;
	margin-right: .3em;
	margin-left:0;
}
.biu-button.icon-left>.content{
	order: 2;
}

@keyframes spin {
	0%{transform: rotate(0deg);}
	100%{transform: rotate(360deg);}
}

.loading{
	animation: spin 1s infinite linear;
}
</style>