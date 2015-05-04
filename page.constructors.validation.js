PAGE.add("Constructors.Validation", function(rules, options) {

	var dog = {
		rules : rules || { }

		, check : function(name, validationName, val, modifier) {
			if (this.rules[validationName] !== undefined) {
				return this.rules[validationName](name, val, modifier)
			} else {
				console.error("missing validation rule, SOURCE:Constructors.Validation", validationName)
				return { truth : true, msg : "", val : undefined }
			}
		}

		, checkAll : function(arr) {

			var truth = true
				, msg = []

			if (!arr.length) return false
			for (var x = 0; x < arr.length; x++)
			(function(index, item) {
				var result = dog.check.apply(dog, item)

				if (result.truth) {
				} else {
					truth = false
					msg.push(result.msg)
				}

			}(x, arr[x]))
		
			return {
				truth : truth
				, msg : msg
			}
		}
	}

	return dog

})
