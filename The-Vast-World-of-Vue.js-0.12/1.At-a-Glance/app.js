new Vue({
	el : "#tasks",
	data : {
		tasks : [
			{body:"this is a demo task",completed:false}
		],
		newTask : ""
	},
	computed:{
		completions:function(){
			return this.tasks.filter(function(task){
				return task.completed;
			});
		},
		remaining:function(){
			return this.tasks.filter(function(task){
				return ! task.completed;
			});
		}
	},
	filters:{
		inProcess:function(tasks){
			return tasks.filter(function(task){
				return ! task.completed;
			});
		}
	},
	methods : {
		addTask:function(){

			if(!this.newTask){
				return ;
			}

			this.tasks.push({
				body:this.newTask,
				completed:false
			});
			this.newTask = ''; 
		},
		removeTask:function(task){
			this.tasks.$remove(task);
		},
		editTask:function(task){
			this.removeTask(task);
			this.newTask = task.body;
			this.$els.newtask.focus();
		},
		toggleTaskCompletion:function(task){
			task.completed = ! task.completed;
		},
		completeAll:function(){
			this.tasks.forEach(function(task){
				task.completed = true;
			});
		},
		clearCompleted:function(){
			this.tasks = this.tasks.filter(function(taks){
				return ! taks.completed;
			});
		}
	}
})