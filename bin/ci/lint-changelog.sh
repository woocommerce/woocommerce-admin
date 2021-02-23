#!/usr/bin/env bash

$changelog_entry=$(sed -n '/^== Unreleased ==/,/^==/p' readme.txt | grep $PR_NUMBER)

if [ -z "$changelog_entry" ]
then
  echo "Error: No changelog entry was provided for $PR_NUMBER"
  exit 1
fi
