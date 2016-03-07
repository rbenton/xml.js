var xmllint = {};

xmllint.validateXML = function(options) {

	var Module = {};

	"xml schema relaxng".split(" ").forEach(function(key) {
		Module[key] = toStringArray(options[key]);
	});

	if (Module.xml.length === 0) {
		throw new Error("No XML specified.");
	}

	if ((Module.schema.length === 0) && (Module.relaxng.length === 0)) {
		throw new Error("At least one of ( schema | relaxng ) expected in options.");
	} else if ((Module.schema.length > 0) && (Module.relaxng.length > 0)) {
		throw new Error("Only one of ( schema | relaxng ) supported in options.");
	}

	/* XMLLINT.RAW.JS */

	Module['return'] = Module['return'].split('\n').slice(0,-2);

	// Do this in a JSLint style way...
	return {
		errors: Module['return'].length ? Module['return'] : null
	};

};

function toStringArray(arg) {
	if (!Array.isArray(arg)) {
		arg = ("string" === typeof arg) ? [arg] : [];
	}
	return arg;
}

if ("undefined" === typeof window) {
	if ("undefined" !== typeof module) {
		module.exports = xmllint;
	}
}
