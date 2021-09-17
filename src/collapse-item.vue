<template>
	<div class='collapse-item'>
	<div class="title">
	 {{title}}
	</div>
	 <div class="content">
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
}

};
</script>
<style scoped>
.collapse-item{

}

.title{
border: 1px solid #ddd;
border-radius: 4px;
}

</style>