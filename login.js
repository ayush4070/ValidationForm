function valiform(){
    var email=document.form.email.value;
    var atposition=email.indexOf("@");
    var dotposition=email.indexOf(".");
    var password=document.form.password.value;
    var confirmpassword=document.form.confirmpassword.value;

    if(email==null||email==""){
        document.getElementsByClassName("b")[0].innerText="please enter email"
        return false;
    }
    if(atposition<1||dotposition<atposition+2||dotposition+2>=email.length){
        document.getElementsByClassName("b")[0].innerText="**Enter Valid email"
        return false;
    }
    if(password==""|| password==null){
        document.getElementsByClassName("b")[1].innerText="Enter Password"
        return false;
    }
    if(password==confirmpassword){
        alert("submitted succesfully");
        return true;
    }else{
        document.getElementsByClassName("b")[1].innerText="Password not Match"
        return false;
       
    }
}