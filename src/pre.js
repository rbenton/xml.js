
Module['preRun'] = function () {
	var i;
	//Clamping this to `1` xml file for the moment since it's unclear how best to format the return value to support multiple xml files.
	for (i = 0; i < (1 || Module['xml'].length); i++) {
		FS.createDataFile('/', 'file_' + i + '.xml', Module['intArrayFromString'](Module['xml'][i]), true, true);
	}
	for (i = 0; i < Module['schema'].length; i++) {
		FS.createDataFile('/', 'file_' + i + '.xsd', Module['intArrayFromString'](Module['schema'][i]), true, true);
	}
	for (i = 0; i < Module['relaxng'].length; i++) {
		FS.createDataFile('/', 'file_' + i + '.rng', Module['intArrayFromString'](Module['relaxng'][i]), true, true);
	}
};

Module.arguments = ['--noout'];

(function () {
	var i;
	for (i = 0; i < Module['schema'].length; i++) {
		Module.arguments.push('--schema');
		Module.arguments.push('file_' + i + '.xsd');
	}
	for (i = 0; i < Module['relaxng'].length; i++) {
		Module.arguments.push('--relaxng');
		Module.arguments.push('file_' + i + '.rng');
	}
	for (i = 0; i < (1 || Module['xml'].length); i++) {
		Module.arguments.push('file_' + i + '.xml');
	}
}());

Module['return'] = '';

Module['stdout'] = Module['stderr'] = function (code) {
	Module['return'] += String.fromCharCode(code);
};
