
var $ = function (id) 
{
    return document.getElementById(id);
}

function processInfo()
{
  
    var firstName = $('firstname').value;
    var lastName = $('lastname').value;
    var email = $('email').value;
	
  console.log("FName" + firstName);
        if (firstName == '')
        {
            $('firstnameerror').innerHTML = "Enter First Name";  
        }

        if (lastName == '')
        {
            $('lastnameerror').innerHTML = "Enter Last Name";   
        } 

        if (email == '')
        {
            $('emailerror').innerHTML = "Enter Email";
        } 


    
    var donation = $("donation").value;
    
        if (donation == '')
        {
            $('donationerror').innerHTML = "Enter Donation Amount";  
        }

        //function checkNumber()
        //var userInt = parseInt(userResponse);
        //alert("Amount must be numeric");
} 


function clearFields(){
  $('myform').reset();
}
    
window.onload = function () 
{
  console.log("window load");
  
   var alertCity = function()
    {
        var myCity = $("city").value;
      

        if (city == '')
        {
            $('cityerror').innerHTML = "Select a City from the list";  
        }
    }
   

  
  $('addpatron').onclick = processInfo;
  $('clearfields').onclick = clearFields;
  $('city').onchange = alertCity;

 // if (addPatron == '')
 // {
 //   $('endmessage').innerHTML = "Patron Not Added";  
 // }


}