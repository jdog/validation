PAGE.add("ValidationRules.maxLength", function(name, val, length) {

	var dog = {
		truth : true
		, msg : ""
		, val : val
	}

	if (!val || val.length > length) {
		dog.truth = false
		dog.msg = name + " must be no greater than " + length + " characters long"
	}

	return dog

})


