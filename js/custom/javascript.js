$(document).ready(function(){
    jQuery.validator.setDefaults({
        debug: true,
        success: "valid"
    });	
	$("#signUpForm").validate({
		rules:{
			firstname:{
				required:true,
				minlength:2
			},
			lastname:{
				required:true,
				minlength:2
			},
			mobile:{
				required:true,
				phoneUS:true
			},
			email:{
				required:true,
				email:true
			},
			skills:{
				required:true,
				minlength:2
			},
			birth:{
				required:true,
				date:true
			},
			recommendation:{
				required:true,
				minlength:2
			}
		},
		messages:{
			firstname:{
				required:"Please enter your first name",
				minlength:"Your first name must be at least 2 characters",
			},
			lastname:{
				required:"Please enter your last name",
				minlength:"Your last name must be at least 2 characters"
			},
			email:{
				required:"Please enter your email address",
				email:"Please enter the valid email"
			},
			mobile:{
				required:"Please enter your phone number",
				phoneUS:"Please enter the valid phone number"
			},
			skills:{
				required:"You must select your skills",
				minlength:"You must select at least 2 skills"
			},
			birth:{
				required:"Please choose your date of birth"
			},
			recommendation:{
				required:"Please enter your recommendation",
				minlength:"Please enter at least 2 characters"
			}
		},
		
		submitHandler: function(form) {
         form.submit();
        }
	});
	
	
	
});

    function validate(x){
		var y = document.getElementById(x);
		if($(y).valid()){
			y.nextSibling.style.background = "url('images/icons/yes.png')";
			y.nextSibling.style.display = "block";
		}else{
			y.nextSibling.style.background = "url('images/icons/no.png')";
			y.nextSibling.style.display = "block";
			}
	}
	function validateDate(x){
		var y = document.getElementById(x);
		if(y.value != ""){
			y.nextSibling.style.background = "url('images/icons/yes.png')";
			y.nextSibling.style.display = "block";
		}else{
			y.nextSibling.style.background = "url('images/icons/no.png')";
			y.nextSibling.style.display = "block";
			}
	}
	