<!DOCTYPE html>
<html>
    <head>
        <title>Laravel</title>
    </head>
    <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css">
    <body>
        <div class="container">
            <tasks></tasks>
        </div>
        <template id="tasks-template">
            <h1>My Tasks</h1>

            <ul class="list-group">
                <li class="list-group-item" v-for="task in list">
                    @{{task.body}}
                    <strong @click="deleteTask(task)">X</strong>
                </li>
            </ul>
        </template>
        <script type="text/javascript" src="/assets/js/jquery-3.0.0.js"></script>
        <script type="text/javascript" src="/assets/js/vue.js"></script>
        <script type="text/javascript" src="/assets/js/main.js"></script>
    </body>
</html>
