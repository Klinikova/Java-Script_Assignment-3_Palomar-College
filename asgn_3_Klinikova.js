var $ = function (id) 
{
    return document.getElementById(id);
}

function processInfo()
{
  
    var firstName = $('firstname').value;
    var lastName = $('lastname').value;
    var email = $('email').value;
	
  //console.log("FName" + firstName);
        var error = 0;
        if (firstName == '')
        {
            $('firstnameerror').innerHTML = "Enter First Name";
            error=1;  
        }

        if (lastName == '')
        {
            $('lastnameerror').innerHTML = "Enter Last Name";   
            error =1;
        } 

        if (email == '')
        {
            $('emailerror').innerHTML = "Enter Email";
            error= 1;
        } 


    var donation = $("donation").value;
    
        if (donation == '')
        {
            $('donationerror').innerHTML = "Enter Donation Amount";
            error =1;  
        }

        if(isNaN(donation))
        {
            $('donationerror').innerHTML = "Amount must be numeric";
            error = 1;
        }
        
        var city = $('city').value;
        
       
        if (city == '-')
        {
            $('cityerror').innerHTML = "Select a City from the list";
            error= 1;
        }

         if (error == 1)
        {
            $('endmessage').innerHTML = "Patron Not Added";  
        } 
        else 
        {
           $('myform').submit();
        }

} 


function clearFields(){
  $('myform').reset();
}
    
window.onload = function () 
{
 
   var alertCity = function()
    {
        var myCity = $('city').value;
        
        console.log('city selection: ' + myCity);
        if (myCity == '-')
        {
            $('cityerror').innerHTML = "Select a City from the list";
            
        }
    }
   
  $('addpatron').onclick = processInfo;
  $('clearfields').onclick = clearFields;
  $('city').onchange = alertCity

}