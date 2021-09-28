function validateemail()  
{  
var x=document.myform.email.value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");
// var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
var message = document.getElementById("message");
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length)
// if (filter.test(x.value))
{  
    message.innerHTML ="<span style='color:red'>Oops! Please check your email</span>";
  return false;
  }
  else{
    message.innerHTML = "<span style='color:green'>Your email is correct</span>";
  return false;  
  }
}  

// var testresults

// function checkemail() {
//   var str = document.myform.email.value
//   var filter = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
//   if (filter.test(str))
//     testresults = true
//   else {
//     alert("Please input a valid email address!")
//     testresults = false
//   }
//   return (testresults)
// }

// function checkbae() {
//   if (document.layers || document.getElementById)
//     return checkemail()
//   else
//     return true
// }