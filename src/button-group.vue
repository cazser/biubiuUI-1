<template>
	<div class='biu-button-group'>
	<slot></slot>
	</div>
</template>
<script>
export default{
name:'button-group',
setup(){
	
},
mounted(){
	for (let node of this.$el.children){
		if(node.nodeName.toLowerCase()!=='button'){
			console.warn("biu-button-group的子元素应该全是button")
		}
		//console.log(node.nodeName)
	}
}
};
</script>
<style scoped>
.biu-button-group{
display: inline-flex;
vertical-align: middle;
}

.biu-button-group>.biu-button{
	border-radius: 0;
}


</style>