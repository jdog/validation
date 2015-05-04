PAGE.add("ValidationRules.businessName", function (name, val, type) {
	var dog = {
		truth: true
		, msg: ""
		, val: val
		, ilegal: ""
	}

	if (dog.val) {

		var bizName = cleanName(dog.val)

		switch (type) {
			case "LLC":
				dog.truth = isLLCName(bizName)
				dog.msg = !dog.truth ? "Business name for an LLC must end with LLC" : ""
				break
			case "Corp":
				dog.truth = isCorpName(bizName)
				dog.msg = !dog.truth ? "Business name for a Corporation must end with Corp or Inc" : ""
				break
			case "Partnership":
				dog.truth = !isLLCName(bizName) && !isCorpName(bizName)
				dog.msg = !dog.truth ? 'Business name for a Partnership should not include "' + dog.ilegal.toUpperCase() + '"' : ""
				break
			case "SoleProprietor":
				dog.truth = !isLLCName(bizName) && !isCorpName(bizName) && !isLLPName(bizName)
				dog.msg = !dog.truth ? 'Business name for a Sole Proprietorship should not include "' + dog.ilegal.toUpperCase() + '"' : ""
				break
		}
	}

	function cleanName(bizName) {
		bizName = removeLastDot(bizName)
		return bizName.toLowerCase()
	}

	function removeLastDot(bizName) {
		return bizName.substr(bizName.length - 1, bizName.length) ==  "." ? bizName.substr(0, bizName.length - 1) : bizName
	}

	function isBlackListed(cleanName, blackList) {
		var isBlackListed = false
		for (var i = 0; i < blackList.length; i++) {
			if (cleanName.indexOf(blackList[i]) > -1) {
				if (cleanName.length - cleanName.indexOf(" " + blackList[i]) == blackList[i].length + 1) {
					isBlackListed = true
					dog.ilegal = blackList[i]
				}
			}
		}
		return isBlackListed
	}

	function isCorpName(cleanName) {
		var blackList = ["corporation", "incorporated", "incorp", "corp", "inc"]
		return isBlackListed(cleanName, blackList)
	}

	function isLLCName(cleanName) {
		var blackList = ["limited liability corporation", "limited liability corp", "limited corp", "l.l.c", "llc"]
		return isBlackListed(cleanName, blackList)
	}

	function isLLPName(cleanName) {
		var blackList = ["limited liability partnership", "limited partnership", "l.l.p", "llp"]
		return isBlackListed(cleanName, blackList)
	}

	return dog

})