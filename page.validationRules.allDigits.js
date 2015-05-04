PAGE.add("ValidationRules.allDigits", function(name, val) {

	var dog = {
		truth : true
		, msg : ""
		, val : val
	}

	if (val && val.search(/\D/) > -1) {
		dog.truth = false
		dog.msg = "only digits are allowed for " + name
	}

	return dog

})
