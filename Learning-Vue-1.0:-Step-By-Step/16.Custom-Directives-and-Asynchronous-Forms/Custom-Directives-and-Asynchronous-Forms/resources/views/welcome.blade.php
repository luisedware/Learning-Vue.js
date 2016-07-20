<!DOCTYPE html>
<html>
    <head>
        <title>Laravel</title>

        <link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">
    </head>
    <body>
        <form method="POST" action="/posts/1" v-ajax complete="Okay, the post has heen deleted.">

            {{ method_field('DELETE') }}
            {{ csrf_field() }}

            <button type="submit">Delete Post</button>
        </form>
        <script src="/assets/js/vue.js"></script>
        <script src="/assets/js/vue-resource.min.js"></script>
        <script type="text/javascript">
            Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('input[name="_token"]').value;

            Vue.directive('ajax',{

                params: ['complete'],

                bind:function(){
                    console.log(this.params);
                    this.el.addEventListener('submit', this.onSubmit.bind(this));
                },

                onSubmit: function(e){
                    e.preventDefault();

                    this.vm
                        .$http[this.getRequestType()](this.el.action)
                        .then(this.onComplete.bind(this))
                        .catch(this.onError.bind(this));
                },
                onComplete:function(){
                    if(this.params.complete){
                        alert(this.params.complete);
                    }
                },

                getRequestType: function(){
                    var method = this.el.querySelector('input[name="_method"').value;

                    return (method ? method : this.el.method).toLowerCase();
                },

                onError: function(response){
                    console.log(response);
                }
            });

            new Vue({
                el:'form',
                http:{
                    headers:{
                        'X-CSRF-TOKEN':document.querySelector('input[name="_token"]').value
                    }
                }
            });
        </script>
    </body>
</html>
