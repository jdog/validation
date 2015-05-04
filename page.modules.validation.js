// use
// validation.check("length", val, 14).truth
// validation.check("phoneNumber", val).truth

// or
// validation.checkAll([
//   ["length", val, 14]
//   , ["phoneNumber", val] 
//   , ["email", val] 
// ])

PAGE.wait(
	"ValidationRules.allDigits"
	, "ValidationRules.notEmpty"
	, "ValidationRules.length"
	, "ValidationRules.digitLength"
	, "ValidationRules.minLength"
	, "ValidationRules.maxLength"
	, "ValidationRules.phoneNumber"
	, "ValidationRules.email"
	, "ValidationRules.isHacker"
	, "ValidationRules.businessName"
	, {}
	, function(rules) {

	var options = { }

	PAGE.wait("Constructors.Validation", function(Validation) {
		PAGE.add("Modules.validation", Validation(rules, options))
	})

})
