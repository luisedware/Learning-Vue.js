Vue.directive('sure',function(message){
	this.el.addEventListener('click',function(e){
		if(!confirm(message)){
			e.preventDefault();

			return ;
		}
	});
});

Vue.directive('confirm',{
	isLiteral:true,
	bind:function(){
		this.el.addEventListener('click',function(e){
			if(!confirm(this.expression)){
				e.preventDefault();
				return;
			}
		}.bind(this));
	}
});

new Vue({
	el:"body",
	data:{
		message:"Hi"
	},
	methods:{
		check: function(){
			alert("Form was submitted");
		}
	}
});