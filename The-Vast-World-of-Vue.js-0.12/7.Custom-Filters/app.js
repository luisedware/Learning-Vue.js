new Vue({
	el:'#demo',
	data:{
		gender:"all",
		people:[
			{name:"Ann Eason",gender:"Male"},
			{name:"Fackbook",gender:"Male"},
			{name:"Yahoo",gender:"Female"},
			{name:"Luis Edware",gender:"Male"},
			{name:"Cissy",gender:"Female"},
			{name:"Doubi",gender:"Male"},
			{name:"Twitter",gender:"Male"},
		]
	},
	filters:{
		gender:function(people){
			self = this;

			if(this.gender == 'all'){
				return people;
			}

			return people.filter(function(person){
				return person.gender == self.gender;
			});
		}
	}
})
