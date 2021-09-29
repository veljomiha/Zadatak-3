// function validateemail()  
// {  
// var x=document.myform.email.value;  
// var atposition=x.indexOf("@");  
// var dotposition=x.lastIndexOf(".");
// var message = document.getElementById("message");
// if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length)
// {  
//     message.innerHTML ="<span style='color:red'>Oops! Please check your email</span>";
//   return false;
//   }
//   else{
//     message.innerHTML = "<span style='color:green'>Your email is correct</span>";
//   return false;  
//   }
// } 

function validateemail() {

 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myform.email.value))
  {
    message.innerHTML = "<span style='color:green'>Your email is correct</span>";
    return (false);
  }
  message.innerHTML ="<span style='color:red'>Oops! Please check your email</span>";
    return (false);
}