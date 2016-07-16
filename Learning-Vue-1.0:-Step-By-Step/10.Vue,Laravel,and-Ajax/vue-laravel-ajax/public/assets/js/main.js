Vue.component('tasks', {
    template: '#tasks-template',

    data: function() {
        return {
            list: []
        };
    },

    created: function() {
        this.fetchTaskList();
    },

    methods: {
    	fetchTaskList:function(){
    		$.getJSON('api/tasks', function(tasks) {
	            this.list = tasks;
	        }.bind(this));
    	},
    	deleteTask: function(task){
    		this.list.$remove(task);
    	}
    }
});

new Vue({
    el: 'body'
});
