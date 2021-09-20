<template>
	<div class='sticky' ref="wrapper">
	 <slot></slot>
	</div>
</template>
<script>
export default{
name:'sticky',
mounted(){
	let {top} = this.$refs.wrapper.getBoundingRect()
	console.log(top);
	let t = top+window.scrollY;
},
created(){
	window.addEventListener('scroll', ()=>{console.log('hi')})
},
methods:{
	top(){
	let {top} = this.$refs.wrapper.getBoundingRect()
	
	return top+window.scrollY;
	}
}

};
</script>
<style scoped>
.sticky{

}


</style>