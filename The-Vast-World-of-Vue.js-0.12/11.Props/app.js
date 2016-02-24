Vue.component('coupon',{
	template:'#coupon-template',
	props:['when-applied'],
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
				this.whenApplied = this.coupon;
				
				return this.message = "world"
			}

			this.message = "happy coding";
		}
	}
});

new Vue({
	el:'#demo',
	methods:{
		setCoupon:function(coupon){
			return alert('set Coupon'+coupon);
		}
	}
});