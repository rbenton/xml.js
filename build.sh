cd libxml2-2.7.8
#~/Dev/emscripten/emmake make
cd ..
echo "bitcode ==> js"
# libz.a generated by EM_SAVE_DIR=1 python tests/runner.py test_zlib
~/Dev/emscripten/emcc libxml2-2.7.8/xmllint.o libxml2-2.7.8/.libs/libxml2.a libz.a -o xmllint.js --embed-file test.xml --embed-file test.xsd
# Test:
# js xmllint.js --noout --schema test.xsd test.xml

