<template>
	<div class="tabs-pane" :class="classes" v-if="active">
	 <slot></slot>
	</div>
</template>
<script>
export default{
name:'tabs-pane',
inject: ['b'],
props:{ name:{
	 type:String|Number,
	 required:true
 }
},
computed:{
	classes(){
		return {active:this.active}
	}
},
data(){
	return {
		active:false
	}
},
created(){
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
<style scoped lang="css">
.tabs-pane{
}
.active{
	padding: 1em;
}



</style>