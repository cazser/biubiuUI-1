
<template>
	<div class='toast' ref="toast" :class="toastClasses">
	<div class="message">
	  <slot></slot>
	</div>
	  <div class="line" ref="line"></div>
	
	  <span v-if="closeButton" class="close" @click="onClickClose">
		  {{closeButton.text}}
	  </span>
	</div>
</template>
<script>
export default{
name:'toast',
computed:{
	toastClasses(){
		return {[`position-${this.position}`] :  true}
	}
},
props:{
	autoClose:{
		type:Boolean,
		default: true
	},
	autoCloseDelay:{
		type: Number,
		default: 50
	},
	closeButton:{
		type:Object,
		default:()=>{
			return{
			text:"关闭",
			callback: undefined
			}
		}
	},
	position:{
		type: String,
		default: 'top',
		validator(value){
		return ['top','bottom', 'middle'].indexOf(value)>=0;
		}
	}
},
mounted(){
	this.execAutoClose();
	this.updateStyles();
},
methods:{
	execAutoClose(){
		if(this.autoClose){
		setTimeout(()=>{this.close()}, this.autoCloseDelay*1000)
	}
	},
	close(){
		this.$el.remove();
		this.$unmounted();
		
	},
	onClickClose(){
		if(this.closeButton && typeof this.closeButton.callback === 'function'){
		this.closeButton.callback();
		}
		this.close();
	},
	updateStyles(){
		this.$nextTick(()=>{
	this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`;
	});
	}
}
};
</script>
<style scoped>
.toast{
position: fixed;color: white;
left: 50%;font-size: 14px;
line-height: 1.8;min-height: 40px;display: flex;
align-items: center;background: rgba(0 ,0 ,0 ,0.75);
box-shadow: 0 0 3px 0 rgba(0 ,0 ,0 ,0.5);
padding: 0 16px; animation: fade-in 1s;

}
.close{
flex-shrink: 0;
 padding-left: 16px;
 
}


.line{
	border: 1px solid #666;
	height: 100%;
	margin-left: 16px;
}
.message{
	padding: 8px 0;
}


.position-top{
	top: 0;
	transform: translateX(-50%);
	left: 50%;

}

.position-bottom{
	bottom: 0;
	transform: translateX(-50%);
}

.position-middle{
	top: 50%;
	transform: translate(-50%, -50%);

}

@keyframes fade-in{
	0%{opacity: 0; transform: translateY(100%);}
	100%{opacity: 1; transform: translateY(0%);}
}
</style>