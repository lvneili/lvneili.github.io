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
        
        }
    });