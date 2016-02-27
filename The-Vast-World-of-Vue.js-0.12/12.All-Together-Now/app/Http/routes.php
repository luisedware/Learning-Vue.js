<?php

use App\Coupon;

get('checkout',function(){
    return view('store.checkout');
});

get('api/coupons/{code}',function($code){
	return Coupon::where('code','=',$code)->firstOrFail();
});