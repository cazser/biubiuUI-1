<template>
	<div class="tabs">
	 <slot></slot>
	</div>
</template>
<script>
import EventBus from '@/EventBus.js'
export default{
name:'tabs',
props:{
	selected:{
	type: String,
	required: true
	},
	direction:{
		type: String,
		default: "horizontal",
		validator(value){
			return ['horizontal', 'vertical'].indexOf(value)>=0;
		}
	}
},
created(){
	//this.$emit("update:select", "xxx")
},
mounted(){
console.log(this.selected);
this.eventBus.$emit("update:selected",this.selected)
},
data(){
	 return {eventBus:  new EventBus()}
},
provide(){
	return{
	 b: this.eventBus
	}

},
methods:{
}
};
</script>
<style scoped>
.tabs{

}
</style>