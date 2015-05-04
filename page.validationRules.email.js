PAGE.add("ValidationRules.email", function(name, val) {

	var dog = {
		truth : true
		, msg : ""
		, val : val
	}

	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\ ".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	if (!re.test(val)) {
		dog.truth = false
		dog.msg = name + " is not formatted like Email"
	}

	return dog

})

