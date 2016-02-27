module.exports = {
    template: require('./checkout.template.html'),

    data:function(){
    	return {
    		cost:50,
    		discount:20
    	};
    },

    filters:{
        coupon:function(cost){
            return cost - (this.discount / 100 * cost)
        }
    },

    components:{
        coupon:require('../components/coupon')
    },
    methods:{
        applyDisCount:function(discount){
            this.discount = discount;
        }
    }
};