Vue.component('coupon',{
	template:document.querySelector('#coupon-template'),
	data:function(){
		return {
			coupon:"",
			message:''
		}
	},
	methods:{
		whenCouponHasBeenEntered:function(){
			return this.validate();
		},
		validate:function(){
			if(this.coupon == 'hello'){
				return this.message = "world"
			}

			this.message = "happy coding";
		}
	}
});

new Vue({
	el:'#demo'
});