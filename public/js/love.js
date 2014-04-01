$(function(){

	var movP;
	function startTimer() {
		var rgt;
		movP = setInterval(function(){
			
		 rgt = parseInt($('.element').css('right'));
			
			if (rgt==40) {
				$('.g-element').stop().animate({
					width: '25px'
				},800);        
			}

	   },10); 
	}
	
	$('.hisRoom .turner img, .herRoom .turner img').click(function(){
		
		$this = $(this);
	
		if ($this.attr("src")=="public/img/off_.png") {
				
			$this.attr("src","public/img/on_.png");
			
			$this.parent().parent().find('.light').animate({
				'opacity': '0'
			},1000);			
			
			$this.parent().find('select[name="country"]').fadeIn();
		
		} else {
			
			$this.attr("src","public/img/off_.png");
			
			$this.parent().parent().find('.light').animate({
				'opacity': '1'
			},1000);
			
			$this.parent().find('select[name="country"]').fadeOut();
		
		}
	
	});

	$('.element').click(function(){

		if ($(this).css('right')=='50px'){
			rt = '10px';
			startTimer();
		} else { 
				
			clearInterval(movP);
			
			rt = '50px';  
	
			$('.g-element').stop().animate({
			
				width: 0
			
			},600);
		}
		
		$(this).animate({
		
		 right: rt
		
		},1000);
		
	});

});