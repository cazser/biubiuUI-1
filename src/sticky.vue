<template>
	<div ref="wrapper">
	<div :class="classes">
	 <slot></slot>
	</div>
	</div>
</template>
<script>
export default{
name:'sticky',
mounted(){
	let top = this.top();
	window.addEventListener('scroll', ()=>{
		if(window.scrollY>top){
			this.sticky= true;
		}else{
			this.sticky= false;
		}
	})
},
data(){
	return{
		sticky: false
	}
},
created(){
	
	
},
computed:{
classes(){
	return {sticky: this.sticky}
}
},
methods:{
	top(){
	let {top} = this.$refs.wrapper.getBoundingClientRect()
	
	return top+window.scrollY;
	}
}

};
</script>
<style scoped>
.sticky{
position: fixed;
left:0;
top:0;
width: 100%;
}


</style>