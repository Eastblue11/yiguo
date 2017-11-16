<template>
	<swiper :options="swiperOption"  class="swiper-box swiperOption1">
    <!-- slides -->
        <swiper-slide class="swiper-item"> <img src='../images/lunbo1.jpg'/></swiper-slide>
        <swiper-slide class="swiper-item"><img src='../images/lunbo2.jpg'/></swiper-slide>
        <swiper-slide class="swiper-item"><img src='../images/lunbo3.jpg'/></swiper-slide>
        <swiper-slide class="swiper-item"><img src='../images/lunbo4.jpg'/></swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
	export default{
		data(){
			return{
				swiperOption:{
	              autoplay: 1000,
	              freeMode : true,
	              //设一行显示几张图
	              slidesPerView :1,
	              loop:1,
	              pagination : '.swiper-pagination',
	            //图片之间间距
	                spaceBetween: 20,
	                // direction: 'vertical',
	            }
			}
		},
	}
</script>

<style scoped>
	.swiper-box{
		margin-top: 0.4rem;
	}
	.swiper-box img{
		height:100%;width: 100%;
	}
	
	
</style>