console.log("privet");


$(function(){
	$("#in").on('click',function(){
		$('#text_1').addClass('icon__display-none');
		$('#star_1').addClass('icon__display-none');
		
	
	});

	$('#burger').on('click',function(){
		$(this).toggleClass('active');
		$('#menu').toggleClass('active');
	});
	
	$('#btn2').on('click', function(){
	    $(this).addClass('btn__item_active'); // добавляем класс кнопке
	    $('#btn1').removeClass('btn__item_active'); // убираем класс
	     $('#btn3').removeClass('btn__item_active');
	      $('#btn4').removeClass('btn__item_active');
	      $("#icon_web_1").addClass('icon__display-block');
	      $("#icon_web_2").addClass('icon__display-block');
	      $("#icon__all-1").addClass('icon__display-none');
	       $("#icon__all-2").addClass('icon__display-none');
	        $("#icon__all-3").addClass('icon__display-none');
	         $("#icon__all-4").addClass('icon__display-none');
	         $("#icon__all-1").removeClass('icon__display-block');
	       $("#icon__all-2").removeClass('icon__display-block');
	        $("#icon__all-3").removeClass('icon__display-block');
	         $("#icon__all-4").removeClass('icon__display-block');

	});
	$('#btn1').on('click', function(){
	    $(this).addClass('btn__item_active'); // добавляем класс кнопке
	    $('#btn2').removeClass('btn__item_active'); // убираем класс
	     $('#btn3').removeClass('btn__item_active');
	      $('#btn4').removeClass('btn__item_active');
	      $("#icon_web_1").removeClass('icon__display-block');
	      $("#icon_web_2").removeClass('icon__display-block');
	      $("#icon__all-1").addClass('icon__display-block');
	       $("#icon__all-2").addClass('icon__display-block');
	        $("#icon__all-3").addClass('icon__display-block');
	         $("#icon__all-4").addClass('icon__display-block');
	});
	$('#btn3').on('click', function(){
	    $(this).addClass('btn__item_active'); // добавляем класс кнопке
	    $('#btn1').removeClass('btn__item_active'); // убираем класс
	     $('#btn2').removeClass('btn__item_active');
	      $('#btn4').removeClass('btn__item_active');
	});
	$('#btn4').on('click', function(){
	    $(this).addClass('btn__item_active'); // добавляем класс кнопке
	    $('#btn1').removeClass('btn__item_active'); // убираем класс
	     $('#btn3').removeClass('btn__item_active');
	      $('#btn2').removeClass('btn__item_active');
	});

});