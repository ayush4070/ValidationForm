function validateform(){
    var fname=document.myform.fname.value;
    var lname=document.myform.lname.value;
    var number=document.myform.number.value;
    var email=document.myform.email.value;
    var atposition=email.indexOf("@");
    var dotposition=email.indexOf(".");
    var password=document.myform.password.value;
    var confirmpassword=document.myform.confirmpassword.value;
    
    if(fname==null||fname==""){
        document.getElementsByClassName("a")[0].innerText= '**Please Enter Your Name'
        return false;
    }
    if(lname==null||lname==""){
        document.getElementsByClassName("a")[1].innerText= '**Please Enter Your Last Name'
        return false;
    }
    // number validation..........
    if(number==""){
        document.getElementsByClassName("a")[2].innerText="**please Fill Mobile Number"
        return false;
    }
    if(isNaN(number)){
        document.getElementsByClassName("a")[2].innerText="**Enter Only Numeric Value"
        return false;
    
    }
    if(number.length<10){
        document.getElementsByClassName("a")[2].innerText="**Mobile Number Must be 10 Digit"
        return false;
    }
   if(number.length>10){
        document.getElementsByClassName("a")[2].innerText="**Mobile Number Must be 10 Digit"
        return false;
    }
        
   if((number.charAt(0)!=9)&&(number.charAt(0)!=8)&&(number.chartAt(0)!=7)) {
        document.getElementsByClassName("a")[2].innerText="**Mobile Number Start With 9,8 and 7"
        return false;
    }
    
    if(atposition<1||dotposition<atposition+2||dotposition+2>=email.length){
        document.getElementsByClassName("a")[3].innerText="**Enter Valid email"
        return false;

    }
    if(password==""|| password==null){
        document.getElementsByClassName("a")[4].innerText="Enter Password"
        return false;
    }
    if(password==confirmpassword){
        alert("submitted succesfully");
        return true;
    }else{
        document.getElementsByClassName("a")[4].innerText="Password not Match"
        
        return false;
       
    }
    
    
}




