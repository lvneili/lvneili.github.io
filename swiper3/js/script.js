var swiper = new Swiper('.swiper-container', {
//	设置方向
      direction: 'vertical',
//    设置分页器 小圆点
      pagination: {
        el: '.swiper-pagination',
//      设置小圆点是否可以点击
        clickable: true,
      },
      //向右的按钮
      navigation: {
            nextEl: '.swiper-button-next'
        
       },
       //动画
    	on:{
      init: function(){
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
      }, 
      slideChangeTransitionEnd: function(){ 
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      } 
    }
    	
    });
    
    
   var mp3=document.querySelector("#mp3");
   var mp3btn=document.querySelector("#mp3btn");
// 点击暂停
// mp3btn.style.animationPlayState="paused";
// 点击继续
// mp3btn.style.animationPlayState="running";
	mp3btn.onclick=function(){
	if(mp3.paused){
		mp3btn.style.animationPlayState="running";
		mp3.play();
	}else{
		mp3btn.style.animationPlayState="paused";
		mp3.pause();
	}
	
};
