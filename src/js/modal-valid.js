$(function(){
    var $form = $("#form");
    var $form2 = $("#subscribe_form1");
    var $form3 = $("#subscribe_form2");
    if($form.length){
     $form.validate(
         {
             rules:{
                 username:{
                       required: true,
                       minlength: 3,
                       maxlength: 25
                 },
                 phone:{
                     required: true,
                     minlength: 10,
                     maxlength: 13,
                     digits: true
                 },
                 email:{
                     required: true,
                     email: true
                 }
             },
             messages:{
                 username:{
                     required:'⚠ This field is required',
                     minlength:'⚠ The name must be between 3 and 25 characters',
                     maxlength:'⚠ The name must be between 3 and 25 characters'
                 },
                 phone:{
                     required:'⚠ This field is required',
                     minlength:'⚠ This phone must be in the format  099 000 00 00',
                     maxlength:'⚠ This phone must be in the format  099 000 00 00',
                     digits:'⚠ This phone must be in the format  099 000 00 00'
                 },
                email:{
                 required:'⚠ This field is required',
                 email: '⚠ Please enter a valid email address'
                }
             }
         }
     )
    }


    if($form2.length){
        $form2.validate(
            {
                rules:{
                    email:{
                        required: true,
                        email: true
                    }
                },
                messages:{
                   email:{
                    required:'⚠ This field is required',
                    email: '⚠ Please enter a valid email address'
                   }
                }
            }
        )
    }
    if($form3.length){
        $form3.validate(
            {
                rules:{
                    email:{
                        required: true,
                        email: true
                    }
                },
                messages:{
                   email:{
                    required:'⚠ This field is required',
                    email: '⚠ Please enter a valid email address'
                   }
                }
            }
        )
    }
 })