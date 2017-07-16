
// popup 彈跳視窗
function cancelType(index){
    $('#prodModal'+index).modal('show');
} 

//---- Popup 動態計算高度 - Start ----
function adjustModalMaxHeightAndPosition(){

  $('.modal').each(function(){

    var windowWidth = $(window).outerWidth();
    var contentWidth 
    var mLeft,mTop;

    $(this).find('.modal-dialog').addClass('modal-dialog-center').css({
      'margin-top': function () {
        mTop = ($(this).outerHeight() / 2);
        // console.log("window"+$(window).height());
        // console.log("outer"+$(this).outerHeight());
        if ( $(window).height() < $(this).outerHeight()|| windowWidth <= "992") {
          mTop = 20;
        }
        return mTop;
      },
      'margin-left': function () {
        contentWidth = $(this).innerWidth();
        // 視窗小於 992px
        if (windowWidth <= "992") {
          mLeft = 0;
        }else{
          mLeft = (windowWidth- contentWidth)/2 ;
        }
        return (mLeft);
      }
    });

  });

};

$(window).resize(adjustModalMaxHeightAndPosition).trigger("resize");

$(document)
.on('shown.bs.modal', '.modal', function () {
  adjustModalMaxHeightAndPosition();
  $(document.body).addClass('modal-open');
})
.on('hidden.bs.modal', '.modal', function () {
  $(document.body).removeClass('modal-open');
})
// ---- Popup 動態計算高度 - End ----

//-->