new Vue({
	el:"#demo",
	data:{
		names:['Ann','Eason','Luis','Edware','Ivan','Tomic']
	},
	methods:{
		addName:function(){
			 this.names.push(this.newName);
			 this.newName = "";
		}
	}
});