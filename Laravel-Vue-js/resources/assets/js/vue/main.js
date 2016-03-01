import Vue from 'vue'
import PublilGrid from  './PublicGrid.vue'

Vue.component('public-grid',PublilGrid);

new Vue({
    el: '#app',
    data:{
      message:"hello world"
    }
});
