#!/bin/sh

# This script requires Sketch on macOS – see readme.md for details

ASSETS_PATH="../../plugin/assets"

if hash sketchtool 2>/dev/null; then
  # Installed with sketchtool: https://developer.sketchapp.com/guides/sketchtool/
  /Applications/Sketch.app/Contents/Resources/sketchtool/bin/sketchtool export layers $ASSETS_PATH/resources.sketch --output=$ASSETS_PATH > /dev/null
else
  echo >&2 "Sketchtool is not installed, using pre-built resources from $ASSETS_PATH"
fi
