function validateForm() {
    let username = document.forms["subscription"]["username"].value;
    let usermail = document.forms["subscription"]["usermail"].value;
    let usernumber = document.forms["subscription"]["usernumber"].value;
    let country = document.getElementById("selCountry");
    let usercountry = country.options[country.selectedIndex].value;
    let at = usermail.indexOf("@");
    let dot = usermail.lastIndexOf(".");
    let agree = false;

    if (username == null || username==""){
        alert("Please input the correct name!");
        return false;
    }
    else if (at<1 || dot<at+2 || dot+2>=usermail.length){
        alert("Please input the correct email!");
        return false;
    }
    else if (isNaN(usernumber) || usernumber==null || usernumber==""){
        alert("Please input the correct phone number!");
        return false;
    }
    else if(usercountry==0){
        alert("Please select your country!");
        return false;
    }
    else if(document.getElementById("agreement").checked){
        agree = true;
    }
    else if(agree == false){
        alert("Remember to check the agreement checklist!");
        return false;
    }
    alert("You are already M&T membership now!");
    document.subscription.reset();
}
