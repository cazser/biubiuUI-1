<template>
	<div class='tabs-pane' v-if="active">
		<slot></slot>
	</div>
</template>
<script>
export default{
name:'tabs-pane',
props:['name'],
data(){
	return {active: false}
},
created(){
	console.log(this.name)
	this.b.$on("update:selected", (name)=>{
		if(name===this.name){
			this.active = true;
		}else{
		this.active = false;
		}
		
	})
}

};
</script>
<style scoped>
.tabs-pane{

}


</style>