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
        $('firstname_errormsg').innerHTML = "Enter First Name";
        firstnameerror = 1;
    }

    if (lastName == '')
    {
        $('lastname_errormsg').innerHTML = "Enter Last Name";
        firstnameerror = 1;
    } 

    if (email == '')
    {
        $('email_errormsg').innerHTML = "Enter Email";
        firstnameerror = 1;
    } 


    
window.onload = function () 
{
    $("mybutton").onclick = processInfo;
}