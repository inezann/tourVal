console.log("welcome");

 function valsignin()
 {
   console.log("hai");
   console.log(document);
 
     let email1=document.getElementById("email1").value;
      
     let pwd1=document.getElementById('pwd1').value;
     console.log(email1);
    
   let regexp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

   let regexp1=/^((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20})$/;
  
   
  if((email1=="")||!(regexp.test(email1)))
  {
    alert("Please Enter valid email");
    document.getElementById("email1").value="";
    
    return false;
  }
else{
   if( regexp1.test(pwd1))
  {
    alert("You are logged in....");
    return true;
        
  }
else{
    alert("your password contain 1 number 1 uppercase and 1 lowercase letter");
    document.getElementById("pwd1").value="";
    return false;
}
  }
 }