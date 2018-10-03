
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

        if(isNaN(donation))
        {
            $('donationerror').innerHTML = "Amount must be numeric";
        }

} 


function clearFields(){
  $('myform').reset();
}
    
window.onload = function () 
{
  //console.log("window load");

   var alertCity = function()
    {
        var myCity = $('city').value;
        

        if (myCity == '')
        {
            $('cityerror').innerHTML = "Select a City from the list";
            
        }
    }
   
  $('addpatron').onclick = processInfo;
  $('clearfields').onclick = clearFields;
  $('city').select = alertCity;

  if (addPatron == '')
  {
        $('endmessage').innerHTML = "Patron Not Added";  
  }

  //function validateItems()
  //{
      //if(myform.indexOf() == 0)
      //{
            //alert('http://profperry.com/Classes20/JQueryNew/Assignment_3_PHP/assignment_3.php');
            //myform.focus();
            //return false;
      //}
      //return true;
  //}

}