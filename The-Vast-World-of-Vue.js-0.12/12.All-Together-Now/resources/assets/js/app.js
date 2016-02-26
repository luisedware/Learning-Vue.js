var Vue = require('vue');


new Vue({
    el: "#app",
    components: {
        'checkout-view': require('./views/checkout')
    }
});