function validateemail() {

 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myform.email.value))
  {
    message.innerHTML = "<span style='color:green'>Your email is correct</span>";
    return (false);
  }
  message.innerHTML ="<span style='color:red'>Oops! Please check your email</span>";
    return (false);
}