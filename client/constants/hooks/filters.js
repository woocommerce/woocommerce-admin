/**
 * Filter report table.
 *
 * Enables manipulation of data used to create a report table.
 *
 * @param {object} reportTableData - data used to create the table.
 * @param {string} reportTableData.endpoint - table api endpoint.
 * @param {array} reportTableData.headers - table headers data.
 * @param {array} reportTableData.rows - table rows data.
 * @param {object} reportTableData.totals - total aggregates for request.
 * @param {array} reportTableData.summary - summary numbers data.
 * @param {object} reportTableData.items - response from api requerst.
 * @return {object} reportTableData
 */
export const TABLE_FILTER = 'woocommerce_admin_report_table';

/**
 * Filter Rroduct Report charts.
 *
 * Add or remove a chart from the Product Report.
 *
 * @param {object} chart - chart configuration object.
 * @param {string} chart.key - unique chart key.
 * @param {string} chart.label - chart label.
 * @param {string} chart.orderby - url orderby parameter.
 * @param {string} chart.type - chart unit type.
 * @return {array} - array of chart objects.
 */
export const PRODUCTS_REPORT_CHARTS_FILTER = 'woocommerce_admin_products_report_charts';
