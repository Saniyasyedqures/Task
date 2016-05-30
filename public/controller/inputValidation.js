var app=angular.module("validation",[]);
app.service("validation",function(){
 
this.validateMobileNo=function (mobileNo) {
	return isValidMobileNo(mobileNo);
  }

this.landlineNO=function (landlineNo,result) {
    return isValidLandlineNo(landlineNo);
  }
  
this.validateEmailId=function (email) {
    return isValidEmailId(email);
    
  }

this.validateMatchPasswords=function (pwd,confirmpassword) {
  if(confirmpassword!==pwd)
	    {
             return false;
        }
    else
    {
        return true;
    }
  }
  
this.validateMatchStrings=function (string1,string2,result) {
  if(string1===string2)
	    {
             return undefined;
        }
    else
    {
        return "Strings are not Equal";
    }
  }
  
 //service for only 1 variable
this.validateRequired=function (value) {
     isValid(value);
  }

//service for more than 1 variable
this.validateAllRequiredFields=function (inputToValidate) {
    return isAllRequiredFields(inputToValidate);
}


});


//function for mobile Number
function isValidMobileNo(mobileNo){
    var mobile=/^(\+91-|\+91|0)?\d{10}$/;
	 if(mobile.test(mobileNo)){
        return true;
	   }else{
        return false;
		}
}

//function for Landline Number
function isValidLandlineNo(landlineNo){
    var landline=/^[0-9]\d{2,4}-\d{6,8}$/;
	 if(landline.test(landlineNo)){
		return undefined;
	 }
	else
    {
		return "Contact Number Format is Incorrect";;	
	}
}

//function for Email
function isValidEmailId(email){
    var email1 = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
   // return re.test(email);
	 if(email1.test(email)){
		return true;
	}else{
		return false;	
	}
}

//function for Input Validation
function isAllRequiredFields(inputToValidate){
     var result;
    
for(var i=0;i<inputToValidate.length;i++){
    result=isValid(inputToValidate[i]);
    if(result==false){
    return false;
    }
}
}

//function for undefined value
function isValid(value){
if(value==undefined || value==""){
 return false;   
}else{
        return true;
      }}