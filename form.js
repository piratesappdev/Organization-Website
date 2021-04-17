function onSubmit(){

}
function formValidation(){
var Name = document.getElementById("name");
var Gpa = document.getElementById("gpa");
var Major = document.getElementById("major");
var Date = document.getElementById("date");
var GradYear = document.getElementById("grad");
var Team = document.getElementById("team");
var Email = document.getElementById("email");
//var umsex = document.registration.msex;
//var ufsex = document.registration.fsex;
/*  switch(team){
    case Web:
    case Mobile:
    default:
  }*/
  if(userid_validation(uid,5,12)){
    if(passid_validation(passid,7,12)){
      if(allLetter(uname)){
        if(alphanumeric(uadd)){
          if(countryselect(ucountry)){
            if(allnumeric(uzip)){
if(ValidateEmail(uemail))
{
if(validsex(umsex,ufsex))
{
}
}

            }
          }
        }
      }
    }
  }
  alert("It works");
  return false;
}
