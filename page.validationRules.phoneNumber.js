PAGE.add("ValidationRules.phoneNumber", function(name, val) {

	var dog = {
		truth : true
		, msg : ""
		, val : val
	}

	, regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

	if (val) {
		if (!regex.test(val)) {
			dog.truth = false
			dog.msg = name + " is not formatted correctly"
		} else {
			dog.val = val.replace(regex, "$1-$2-$3");
		}
	}

	return dog

})
