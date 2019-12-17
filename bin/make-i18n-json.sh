#!/usr/bin/env bash

# Substitute JS source references with build references
for T in `find languages -name "*.po"`
	do
		sed \
			-e 's/#: client[^:]*:/#: dist\/app\/index.js:/gp' \
			-e 's/#: packages\/components[^:]*:/#: dist\/components\/index.js:/gp' \
			-e 's/#: packages\/date[^:]*:/#: dist\/date\/index.js:/gp' \
			$T | uniq > $T-build
		rm $T
		mv $T-build $T
	done

# Make the JSON files
wp i18n make-json languages --no-purge