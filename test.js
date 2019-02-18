
function normalizeNumber()
{
    let num=document.getElementById("mobileNum")
num.value=num.value.slice(0,9)
}

function showHideDiv(el) {
    var srcElement = document.getElementById(el);
    if (srcElement != null) {
        if (srcElement.style.display == "block") {
            srcElement.style.display = 'none';
        }
        else {
            srcElement.style.display = 'block';
        }
        return false;
    }
}


function checkForm()
{
 var oldP=document.getElementById("oldP").value;
 var newP=document.getElementById("newP").value;
 var confirmP =document.getElementById("confirmP").value;

 if(oldP!=""&&newP!=""&&confirmP!="")
 {
   if(oldP!=newP)
   {
     if(newP==confirmP)
      {
       return true;
      }
      else
       {
         alert("Confirm password is not same as you new password.");
         return false;
       }
   }
   else
  {
   alert(" This Is Your Old Password,Please Provide A New Password");
   return false;
  }
 }
 else
 {
  alert("All Fields Are Required");
  return false;
 }
}


  
