/**
 *  Utility class for handle all common feature
 *
 **/
function Utility(){
    if ( arguments.callee.instance )
        return arguments.callee.instance;
    arguments.callee.instance = this;
}

Utility.getInstance = function() {
    var utility = new Utility();
    return utility;
};

Utility.prototype.fieldValidate = function(value, fieldObj, errorMsgObj, regExpressFormat){

    var format = regExpressFormat,
        fieldName = fieldObj.prev().text(),
        result = false;
    
    if(!fieldName)
    	fieldName = fieldObj.attr("name");
    	
    // Check format
    if(!value){
        errorMsgObj.children(".errorText").html("Field '" + fieldName + "' is empty");
        result = false;
    }else if(!format.test(value)){
        errorMsgObj.children(".errorText").html("Format of field '" + fieldName + "' is incorrect");
        result = false;
    }else{
        result = true;
    }

    // Show error info
    if(!result){
    	errorMsgObj.show();
        fieldObj.focus();
        fieldObj.select();
    }

    return result;

};

// Function for validate email input fields and focus, select then show error message if format error occur
Utility.prototype.emailValidate = function(fieldObj, errorMsgObj){
    var format = /^([_a-z0-9-]+)(\.[_a-z0-9-]+)*@([a-z0-9-]+)(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/, // email regex
        value = $.trim(fieldObj.val()).toLowerCase();
    return this.fieldValidate(value, fieldObj, errorMsgObj, format);
};

// Function for validate float input fields and focus, select then show error message if format error occur
Utility.prototype.floatValidate = function(fieldObj, errorMsgObj){
    var format = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)$/, // float regex
        value = $.trim(fieldObj.val()).toLowerCase();
    return this.fieldValidate(value, fieldObj, errorMsgObj, format);
};

// Function for validate password input fields and focus, select then show error message if format error occur
Utility.prototype.passwordValidate = function(fieldObj, errorMsgObj){
	
	// Password matching expression. Password must be at least 4 characters, 
	// no more than 20 characters, and must include at least one upper case letter, 
	// one lower case letter, and one numeric digit.	
    var format = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,20}$/, 
        value = $.trim(fieldObj.val()),
    	fieldName = fieldObj.prev().text(),
	    result = false;

	if(!fieldName)
		fieldName = fieldObj.attr("name");
		
	// Check format
	if(!value){
	    errorMsgObj.children(".errorText").html("Field '" + fieldName + "' is empty");
	    result = false;
	}else if(!format.test(value)){
	    errorMsgObj.children(".errorText").html("Format of field '" + fieldName + "' is incorrect. " + 
	    		"Password must be at least 4 characters and must include at least one upper case letter, one lower case letter, and one numeric digit.");
	    result = false;
	}else{
	    result = true;
	}
	
	// Show error info
	if(!result){
		errorMsgObj.show();
	    fieldObj.focus();
	    fieldObj.select();
	}
   
    return result;
};

// Function for validate password input fields and focus, select then show error message if format error occur
Utility.prototype.emptyValidate = function(fieldObj, errorMsgObj){
    var format = /|S*/, // not defined yet, use normal string now
        value = $.trim(fieldObj.val());
    return this.fieldValidate(value, fieldObj, errorMsgObj, format);
};

//Function for validate password input fields and focus, select then show error message if format error occur
Utility.prototype.newPasswordValidate = function(passwdObj, confirmPasswdObj, errorMsgObj){
    var value1 = $.trim(passwdObj.val()),
    	value2 = $.trim(confirmPasswdObj.val()),
    	result = false;

	// Check format
	if(value1 != value2){
	    errorMsgObj.children(".errorText").html("New password and confirm password is not identical.");
	    result = false;
	}else{
	    result = true;
	}
	
	// Show error info
	if(!result){
		errorMsgObj.show();
		confirmPasswdObj.focus();
		confirmPasswdObj.select();
	}
	
	return result;    
    
};


/**
 * Protect window.console method calls, e.g. console is not defined on IE
 * unless dev tools are open, and IE doesn't define console.debug
 */
(function() {
  if (!window.console) {
    window.console = {};
  }
  // union of Chrome, FF, IE, and Safari console methods
  var m = [
    "log", "info", "warn", "error", "debug", "trace", "dir", "group",
    "groupCollapsed", "groupEnd", "time", "timeEnd", "profile", "profileEnd",
    "dirxml", "assert", "count", "markTimeline", "timeStamp", "clear"
  ];
  // define undefined methods as noops to prevent errors
  for (var i = 0; i < m.length; i++) {
    if (!window.console[m[i]]) {
      window.console[m[i]] = function() {};
    }    
  } 
})();