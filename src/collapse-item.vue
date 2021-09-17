<template>
	<div class='collapse-item' >
	<div class="title" @click="open=!open">
	 {{title}}
	</div>
	 <div class="content" v-if="open">
	 <slot></slot>
	 </div>
	</div>
</template>
<script>
export default{
name:'collapse-item',
props:{
	title:{
		type:String,
		required: true
	}
},
data(){
	return{
		open: false
	}
}

};
</script>
<style scoped>
.collapse-item{

}

.title{
border: 1px solid #ddd;
min-height: 32px;margin-top: -1px;
margin-left: -1px;margin-right: -1px;
display: flex; align-items: center;
padding: 0 16px;
}
.collapse-item:first-child>.title{
	border-top-left-radius: 4px;
	border-top-right-radius: 4px;
}


</style>