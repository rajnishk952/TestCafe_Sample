#!/bin/bash

export BROWSERSTACK_PROJECT_NAME="CE TestCafe Samples"
export BROWSERSTACK_BUILD_ID="TestCafe samples"
export BROWSERSTACK_DISPLAY_RESOLUTION="1024x768"

declare -a browsers=( "browserstack:Chrome@84.0:Windows 10" "browserstack:firefox@79.0:Windows 10" "browserstack:edge@84.0:Windows 10" "browserstack:opera@70.0:Windows 10" )

for i in "${browsers[@]}"
do
	./node_modules/.bin/testcafe "${i}" ./tests/sample.test.js
done