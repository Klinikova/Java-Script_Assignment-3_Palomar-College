var $ = function (id) 
{
    return document.getElementById(id);
}

var processInfo = function()
{
    var firstName = $('firstname').value;
    var lastName = $('lastname').value;
    var email = $('email').value;
	
        if (firstName == '')
        {
            $('firstnameerrormsg').innerHTML = "Enter First Name";  
        }

        if (lastName == '')
        {
            $('lastnameerrormsg').innerHTML = "Enter Last Name";   
        } 

        if (email == '')
        {
            $('emailerrormsg').innerHTML = "Enter Email";
        } 


    var alertCity = function()
    {
        var myCity = $("city").value;

        if (city == '')
        {
            $('cityerror').innerHTML = "Select a City from the list";  
        }
    }
    var donation = $("donation");
    
            if (donation == '')
            {
                $('donationerror').innerHTML = "Enter Donation Amount";  
            }
    
    
    window.onload = function () 
    {
        $("city").onchange = alertCity;
        $("button").onclick = addPatron;
        $("button").onclick = clearFields;

        if (addPatron == '')
        {
            $('endmessage').innerHTML = "Patron Not Added";  
        }
    
    }
}