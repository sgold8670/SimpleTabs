// JavaScript Document
$(document).ready(function() {
	//hide tab sections
	$('.tab-section').hide();
	
	$('#tabs a').bind('click',function(e){
			//removes highlighted class
			$('#tabs a.current').removeClass('current');
		
		//hides and shows tab sections
		$('.tab-section:visible').hide(); //:visible is a jquery method that gets the visible element
		$(this.hash).show();
			
			//adds highlighted class
			$(this).addClass('current');
		e.preventDefault;
	}).filter(':first').click();
	
	//the '.filter(':first').click()' function tells the browser to apply the '$('#tabs a').bind' function to the first anchor tag when page loads
	//this gives the a.current tag its color 
	
});