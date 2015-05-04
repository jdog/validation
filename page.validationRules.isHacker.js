PAGE.add("ValidationRules.isHacker", function(name, val) {

	var dog = {
		truth : true
		, msg : ""
		, val : val
	}

	function isHacker(str) {
		if (str && str.length) {
			if (str && str.search(/<[^>]*script/) > -1) {
				return true
			}
		}
		return false
	}

	if (isHacker(val)) {
		dog.truth = false
		dog.msg = name + " input is invalid, Hacker error"
	}

	return dog

})

