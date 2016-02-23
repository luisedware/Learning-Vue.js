new Vue({
	el:"#demo",
	data:{
		sortKey:"",
		reverse:1,
		search:'',
		columns:['name','age'],
		peoples:[
			{name:'ann',age:10},
			{name:'eason',age:20},
			{name:'luis',age:30},
			{name:'edware',age:40},
			{name:'ivan',age:50}, 
			{name:'tomic',age:60}
		]
	},
	methods:{
		sortBy:function(sortKey){
			this.reverse = (this.sortKey==sortKey)?-this.reverse:1;
			console.log(this.reverse);
			this.sortKey = sortKey;
		}
	}
});