
Online demo at http://syssgx.github.com/xml.js/

This package exports the `xmllint` object which is an Emscripten port of
libxml2's `xmllint` command for use in the browser or node.

#### API ####

**XML Schema validation**

```javascript

Object xmllint.validateXML({
	xml: "String",
	schema: "String" || ["String", "String", ...]
});

```

**Relax NG validation**

```javascript

Object xmllint.validateXML({
	xml: "String",
	relaxng: "String" || ["String", "String", ...]
});

```

**Validation results**

The return value Object has one property `errors` which is either null,
in the case of no errors, or an Array of error strings....eg:

```javascript

if (!xmllint.validateXML(opts).errors) {
	//there were no errors.
}

```

Usable with Browserify via `browserify-shim`.

#### Building xmllint from source ####

Install emscripten.

```
	git clone
	git submodule init
	git submodule update
	./script/clean
	./script/libxml2
	./script/compile
	./script/test
```

There are also equivalent `gulp` tasks and `npm` scripts.

#### Building browserify test bundle ####

Install Node and NPM.

```
    npm install
    npm run bundle
```
Open ./test/test.html in a web browser.