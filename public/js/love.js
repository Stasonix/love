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