#!/usr/bin/env bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
STORYBOOK_WORDPRESS_DIR="/../storybook/wordpress";
STORY_BOOK_CSS_PATH="/../storybook/wordpress/css";
TMP_DIR="/../storybook/wordpress/tmp";
ARCHIVE_CSS_PATH="wordpress/wp-admin/css";
ARCHIVE_IMG_PATH="wordpress/wp-admin/images";

mkdir -p "$DIR/$STORY_BOOK_CSS_PATH";
mkdir -p "$DIR/$TMP_DIR";

function download_and_extract_css {
    curl -o $1/wordpress-latest.zip https://wordpress.org/nightly-builds/wordpress-latest.zip;
    unzip -qq "$1/wordpress-latest.zip" "$ARCHIVE_CSS_PATH/*" "$ARCHIVE_IMG_PATH/*" -d "$DIR/$TMP_DIR";
    rsync -a "$DIR/$TMP_DIR/$ARCHIVE_CSS_PATH" "$DIR/$STORYBOOK_WORDPRESS_DIR";
    rsync -a "$DIR/$TMP_DIR/$ARCHIVE_IMG_PATH" "$DIR/$STORYBOOK_WORDPRESS_DIR";
    rm -Ir "$DIR/$TMP_DIR";
}

if [ -z "$(find $DIR/$STORY_BOOK_CSS_PATH -iname '*.css')" ] || [ "$1" == "-f" ]
then
    # The directory is not empty, import css
    download_and_extract_css "$DIR/$STORYBOOK_WORDPRESS_DIR";
else
    echo "Wordpress CSS already imported, pass -f to force an update";
fi
