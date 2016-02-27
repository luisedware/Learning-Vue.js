var Vue = require('vue');
Vue.use(require('vue-resource'));

new Vue({
    el: "#app",
    data:{
    	message:"Hello world"
    },
    components: {
        'checkout-view': require('./views/checkout'),
        'about-view': require('./views/about')
    }
});