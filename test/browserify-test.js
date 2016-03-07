/* global
console
 */

var fs = require('fs'),
	xmllint = require('xmllint');

$(function() {
	runStaticTests();
	initForm();
});

function runStaticTests() {
	var xml = fs.readFileSync('./test/test.xml').toString(),
		schema = fs.readFileSync('./test/test.xsd').toString(),
		relaxng = fs.readFileSync('./test/test.rng').toString();
	console.log("Validating test.xml against test.xsd...");
	console.log(xmllint.validateXML({
		xml: [xml],
		schema: [schema, schema]
	}));
	console.log("Validating test.xml against test.rng...");
	console.log(xmllint.validateXML({
		xml: xml,
		relaxng: relaxng
	}));
}

function initForm() {
	$("#form").on("submit", onSubmit);
}

function onSubmit(event) {
	var schemaType = $("#schema-type").val(),
		schemaLabel = $("#schema-type > option:selected").text(),
		options = {};
	options.xml = $("#xml").val();
	options[schemaType] = $("#schema").val();
	var result = xmllint.validateXML(options);
	console.log("Validating XML against " + schemaLabel + " schema...");
	console.log(result.errors);
	event.preventDefault();
	return false;
}
