#!/bin/bash

# cleans build artifacts
# (does not clean built docs)

DIR_LIB=./lib

if [ -d $DIR_LIB ]; then
  rm -r $DIR_LIB;
fi
