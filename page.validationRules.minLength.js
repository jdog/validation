PAGE.add("ValidationRules.minLength", function(name, val, length) {

	var dog = {
		truth : true
		, msg : ""
		, val : val
	}

	if (!val || val.length < length) {
		dog.truth = false
		dog.msg = name + " must be at least " + length + " characters long"
	}

	return dog

})


