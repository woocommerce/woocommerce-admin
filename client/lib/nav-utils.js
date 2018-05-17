/** @format */

/* Returns a string with the site's WooCommerce/woodash URL appended.
 * TODO: Test
 *
 * @param {String} path Relative path.
 * @return {String} Full admin URL.
 */
export const getWcLink = path => {
	return wcSettings.adminUrl + 'admin.php?page=woodash#' + path;
};

/* Returns a string with the site's wp-admin URL appended. JS version of `admin_url`.
 *
 * @param {String} path Relative path.
 * @return {String} Full admin URL.
 */
export const getWpAdminLink = path => {
	return wcSettings.adminUrl + path;
};
