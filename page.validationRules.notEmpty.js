PAGE.add("ValidationRules.notEmpty", function(name, val) {

	var dog = {
		truth : true
		, msg : ""
		, val : val
	}

	if (!val) {
		dog.truth = false
		// dog.msg = name + " is empty"
	}

	return dog

})

