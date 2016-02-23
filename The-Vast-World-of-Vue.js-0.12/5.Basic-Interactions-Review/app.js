 new Vue({
 	el:"#post",
 	data:{
 		isVisible:true,
 		liked:false,
 		likeCount:10
 	},
 	methods:{
 		toggleLike:function(){
 			this.liked = !this.liked;
 			this.liked ? this.likeCount++:this.likeCount--;
 		}
 	}
 });