Vue.component('tasks', {
    template: '#tasks-template',

    data: function() {
        return {
            list: []
        };
    },
    ready: function() {
        this.fetchTaskList();
    },
    created: function() {},

    methods: {
        fetchTaskList: function() {
            this.$http.get('api/tasks').then(function(response) {
                this.list = response.data;
            });

            // $.getJSON('api/tasks', function(tasks) {
            //        this.list = tasks;
            // }.bind(this));
        },
        deleteTask: function(task) {
            this.list.$remove(task);
        }
    }
});

new Vue({
    el: 'body'
});
