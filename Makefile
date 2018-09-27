# This Makefile is used to manage the version number for `fds` packages.

# Specify Major and Minor version here.
# Jenkins will populate the fix version with its build number.
VERSION ?= 1.7.$(BUILD_NUMBER)

# Jenkins runs this command to get the Git and NPM tag
version:
	@echo $(VERSION)
