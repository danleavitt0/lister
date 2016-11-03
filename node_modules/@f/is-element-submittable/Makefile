#
# Vars
#

BIN = ./node_modules/.bin

#
# Tasks
#

node_modules: package.json
	@npm install

test: node_modules
	@${BIN}/hihat test/*

validate: node_modules
	@standard

init:
	@git init
	@git add .
	@git commit -am "FIRST"
	@hub create micro-js/is-element-submittable -d "Check whether or not a form control is serializable"
	@travis enable
	@git push -u origin master

.PHONY: test validate init
