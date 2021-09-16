
<template>
	<div class='toast' ref="toast">
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
position: fixed;top:0;color: white;
left: 50%;transform: translateX(-50%);font-size: 14px;
line-height: 1.8;min-height: 40px;display: flex;
align-items: center;background: rgba(0 ,0 ,0 ,0.75);
box-shadow: 0 0 3px 0 rgba(0 ,0 ,0 ,0.5);
padding: 0 16px;

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
</style>