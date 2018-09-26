$(function(){

$('#demo').fullpage({
    navigation:true,
    sectionsColor:['#f9dd67','#84a2d4','#ef674d','#ffeedd','#cf4759','#85d9ed','#8ac060','#84d9ed' ],

    afterLoad:function(a,index){
       //先清空所有的内
       $('.section').removeClass('animation');
    // 页码翻到那个内就添加aimation   
       $('.section').eq(index-1).addClass('animation');
    // 无条件清除样式内   在里面加一个section2更加准确
        $('.section2 .search').attr('style', '').attr('src', 'images/02/search01.png');
        $('.section2 .sofas').attr('style', '');
         
        // $('.section3').removeClass('animation');

        $('.section4 .boxCar').attr('style','');
        $('.section4 .keyboard').attr('style','');

        // $('.section5').removeClass('animation');

        $('.section6').attr('style','');
        $('.sofaBox').attr('style','');
        $('.man').attr('style','');
        $('.door').attr('style','');
        $('.girl').attr('style','');
      if(index==2){
          $('.search').animate({
           right:550,
         },500,"easeOutBounce",function(){
             $('.search').attr('src','images/02/search02.png');

             $('.search').delay(500).animate({
                right: 410,
                marginTop: -145,
                height: 35,
             },500);
          
           $('.sofas').delay(500).animate({
               width:441,
               height:218,
           },500);  
             
         })
     

      }
      
      if(index==3){
          $('.section3').addClass('animation');
      }

      if(index==4){
       $('.boxCar').animate({
           right:-1000,
       },2000,'easeInElastic',function(){
            $('.keyboard').show();
       })

      }
     
      if(index==5){
         $('.section5').addClass('animation');
      }

      if(index==6){

        $('.sofaBox').animate({
           top:10,

        },1000,function(){
            $('.section6').animate({
                backgroundPositionX:-1200

            },2500,function(){
               $('.man').animate({
                 height:120

               },800,function(){
                  $('.man').animate({
                      right:-130
                  },1000,function(){
                   
                    $('.door').show();

                 setTimeout(function(){
                     $('.girl').show();
                 },500)   
              
                   
                  })
               }) 



            })
        })

      }
       
      if(index==7){
        $('.section7').addClass('animation')  
      }
      if(index==8){
        // 当鼠标指针在指定的元素中移动时，就会发生 mousemove 事件。
        // mousemove事件处理函数会被传递一个变量——事件对象，其.clientX 和 .clientY 属性代表鼠标的坐标
        
        $('.section8').mousemove(function(e){
          e=e||window.event;
         $('.section8 .hand').css('left',e.pageX+100);
         $('.section8 .hand').css('top',e.pageY);

        })

        $('.section8 .begin').mouseover(function(){
            $('.section8 .begin').attr('src','images/08/begin.gif');  
        })
        $('.section8 .begin').mouseleave(function(){
            $('.section8 .begin').attr('src','images/08/begin.png');
        })

        $('.section8 .again').click(function(){
            // 如果你用了fullpage，它就会有这个方法
           // 这个方法就是指定跳转到第几屏，从1开始
            $.fn.fullpage.moveTo(1);
        
            // $('.section1').addClass('active')
            // location.reload();
        })
    }


    }
       

    })

})