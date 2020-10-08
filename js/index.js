
new WOW (). init (); 


    // Call & init
    $(document).ready(function(){
        $('.ba-slider').each(function(){
          var cur = $(this);
          // Adjust the slider
          var width = cur.width()+'px';
          cur.find('.resize img').css('width', width);
          // Bind dragging events
          drags(cur.find('.handle'), cur.find('.resize'), cur);
        });
      });
      
      // Update sliders on resize. 
      // Because we all do this: i.imgur.com/YkbaV.gif
      $(window).resize(function(){
        $('.ba-slider').each(function(){
          var cur = $(this);
          var width = cur.width()+'px';
          cur.find('.resize img').css('width', width);
        });
      });
      
      function drags(dragElement, resizeElement, container) {
          
        // Initialize the dragging event on mousedown.
        dragElement.on('mousedown touchstart', function(e) {
          
          dragElement.addClass('draggable');
          resizeElement.addClass('resizable');
          
          // Check if it's a mouse or touch event and pass along the correct value
          var startX = (e.pageX) ? e.pageX : e.originalEvent.touches[0].pageX;
          
          // Get the initial position
          var dragWidth = dragElement.outerWidth(),
              posX = dragElement.offset().left + dragWidth - startX,
              containerOffset = container.offset().left,
              containerWidth = container.outerWidth();
       
          // Set limits
          minLeft = containerOffset + 10;
          maxLeft = containerOffset + containerWidth - dragWidth - 10;
          
          // Calculate the dragging distance on mousemove.
          dragElement.parents().on("mousemove touchmove", function(e) {
              
            // Check if it's a mouse or touch event and pass along the correct value
            var moveX = (e.pageX) ? e.pageX : e.originalEvent.touches[0].pageX;
            
            leftValue = moveX + posX - dragWidth;
            
            // Prevent going off limits
            if ( leftValue < minLeft) {
              leftValue = minLeft;
            } else if (leftValue > maxLeft) {
              leftValue = maxLeft;
            }
            
            // Translate the handle's left value to masked divs width.
            widthValue = (leftValue + dragWidth/2 - containerOffset)*100/containerWidth+'%';
                  
            // Set the new values for the slider and the handle. 
            // Bind mouseup events to stop dragging.
            $('.draggable').css('left', widthValue).on('mouseup touchend touchcancel', function () {
              $(this).removeClass('draggable');
              resizeElement.removeClass('resizable');
            });
            $('.resizable').css('width', widthValue);
          }).on('mouseup touchend touchcancel', function(){
            dragElement.removeClass('draggable');
            resizeElement.removeClass('resizable');
          });
          e.preventDefault();
        }).on('mouseup touchend touchcancel', function(e){
          dragElement.removeClass('draggable');
          resizeElement.removeClass('resizable');
        });
      }
      
    //   설명들 left: 30rem;

    $(function() {
        $(".button01").click(function() {
            $(".watches").css('display','none');
            $(".watches01").css('display','block');
            $(".watches02").css('display','none');
            $(".watches03").css('display','none');
            $(".watches2").css('display','none');
        });
        $(".button02").click(function() {
            $(".watches").css('display','none');
            $(".watches01").css('display','none');
            $(".watches02").css('display','block');
            $(".watches03").css('display','none');
            $(".watches2").css('display','none');
      });
        $(".button03").click(function() {
            $(".watches").css('display','none');
            $(".watches01").css('display','none');
            $(".watches02").css('display','none');
            $(".watches03").css('display','block');
            $(".watches2").css('display','none');
        });
      });


// 부드럽게 해당 메뉴로 이동

$(function(){
  $(function () {
          $('#aroowTOtop').click(function () {
              var offset = $('#topPage').offset();
              $('html,body').animate({scrollTop:offset.top},600);
          });
      });
});

$(function(){
  $(function () {
          $('#character').click(function () {
              var offset = $('#section03').offset();
              $('html,body').animate({scrollTop:offset.top},600);
          });
      });
});

$(function(){
  $(function () {
          $('#Specification').click(function () {
              var offset = $('#section07').offset();
              $('html,body').animate({scrollTop:offset.top},600);
          });
      });
});

// 스펙아코디언메뉴
$(document).ready(function() {
  $(".set > p").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".content")
        .slideUp(200);
      $(".set > p i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    } else {
      $(".set > p i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
      $(this)
        .find("i")
        .removeClass("fa-plus")
        .addClass("fa-minus");
      $(".set > p").removeClass("active");
      $(this).addClass("active");
      $(".content").slideUp(200);
      $(this)
        .siblings(".content")
        .slideDown(200);
        
    };
  });
});

$(function(){
  $( '.css_test' ).slideUp(200)
})
