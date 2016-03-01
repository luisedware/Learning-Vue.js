var elixir = require('laravel-elixir');

elixir(function(mix) {
    mix.browserify('vue/main.js');
});
