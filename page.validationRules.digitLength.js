PAGE.add("ValidationRules.digitLength", function(name, val, length) {

	var dog = {
		truth : true
		, msg : ""
		, val : val
	}

	// if there is a val, remove all of the non digits, create temp
	, temp = val ? val.replace(/\D/g, "") : ""

	// make sure the number of digits is the length we want
	if (!temp || temp.length !== length) {
		dog.truth = false
		dog.msg = name + " must have at least " + length + " digits"
	}

	return dog

})
