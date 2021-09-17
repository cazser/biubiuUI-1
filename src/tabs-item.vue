<template>
	<div class='tabs-item' @click="onClick" :class="classes"
	v-if="show">
	<slot></slot>
	</div>
</template>
<script>
export default{
name:'tabs-item',
props:['name', 'type'],
inject: ['b'],
data(){
	return {active: false}
},
created(){
	
	this.b.$on("update:selected", (name)=>{
		if(name===this.name){
			this.active = true;
		}else{
		this.active = false;
		}
		
	})
	console.log(this.type)

},

computed:{
	classes(){
		if(this.active){
			return this.type+"-" + "active"
		}else{
			return {}
		}
	},
	show(){
		if(this.type==='item' || this.active){
			return true;
		}else {
		   return false;
		}
	}
},
methods:{
	onClick(){
		if(this.disabled){
			return;
		}
		this.b.$emit("update:selected", this.name)
	}

}

};
</script>
<style scoped>
 
.tabs-item{
padding: 0 2em;
flex-shrink: 0;
cursor: pointer;

height: 100%;
display: flex;
align-items: center;
flex-direction: row;
}
.item-active{
	color: blue;
	border-bottom: 2px solid blue;
	margin-bottom: -2px;
}
.disabled{
	color: grey;
	cursor: not-allowed;
}

.pane{
	color: inherit;
	border: 1px solid black;
}
</style>