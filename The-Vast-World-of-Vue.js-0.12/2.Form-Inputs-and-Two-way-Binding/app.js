new Vue({
	el:"#demo",
	data:{
		name:"Hello World!"
	},
	ready:function(){
		var that = this;

		setInterval(function(){
			that.name = "Updated";
		},5000);
	}
});