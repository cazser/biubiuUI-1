<template>
	<biu-toast>
	  <div>{{message}}</div>		
	</biu-toast>

</template>
<script>
import Toast from '@/toast.vue'
export default{
name:'test',
props:["message"],
components:{'biu-toast':Toast}

};
</script>
<style scoped>
.test{

}


</style>