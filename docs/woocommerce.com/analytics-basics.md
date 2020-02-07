# Using WooCommerce Analytics Reports
Most of the new reports in the WooCommerce Analytics section have a set of common tools. This document will introduce you to those features, and how they can be utlized to customize and dive-deeper into the various new analytics reports.

## Date Range Picker
![Analytics Date Range Picker](images/analytics-basics-date-range-picker.png)
The Date Range picker allows you to specify which dates you want to include in the report being viewed. When you first open the Date Range Picker, a variety of popular _presets_ allow you to quickly chose some common date ranges:

![Analytics Date Range Picker Presets](images/analytics-date-range-picker-presets.png)

- Today
- Yesterday
- Week to Date
- Last Week
- Month to Date
- Last Month
- Quarter to Date
- Last Year

You can also select which date range to compare against, either the same range from the _Prior Year_ or the _Prior Period_.

If the presets don't match your desired date range, click the _Custom_ tab at the top of the picker to have more granular control over the date range:

![Analytics Date Range Picker Custom](images/analytics-date-range-picker-custom.png)

On the custom picker, you can either manually enter the start and end date using the provided input fields, or use the calendar to make your selection.

After either choosing a preset, or a custom date range, click the _Update_ button to modify the data in the report. Note by doing this, the date range selected is added to the address of the report URL - which allows you to bookmark, or share a report url with a specific date range to other Store admins.

## Advanced Filters
Depending on the report you are viewing, their might also be other Quick Filters and/or Advanced Filters that allow you to further customize the data set being viewed.

![Analytics Filters](analytics-basics-advanced-filters.png)

If filter options are available, they will be shown next to the Date Range picker, or below it on narrow/mobile viewports. Much like the date range selection, filters are also persisted to the URL which allows you to save a quick link to a specific filtered version of a report. Available filters for each report are covered more in-depth in each report's documenation.

## Summary Numbers / Chart
![Analytics Filters](analytics-basics-summary-numbers-chart.png)

At the top of the reports, the Chart and Summary numbers offer quick access to key data, trends of that data, and a visualization of changes over time in the period selected, and the period being compared against.

### Summary Numbers
![Analytics Filters](analytics-basics-summary-number.png)

The _Summary Number_ tab gives you a quick view at the total figure for that metric over the period selected, the total number for the period being compared, and the percentage trend between those two figures. By clicking on a Summary Number, that particular metric is then displayed in the chart.

### Chart
![Analytics Filters](analytics-basics-chart.png)

The charts on report pages offer quite a few options to customize the visualiztion of data. The data legend ( labeled A ) allows you to toggle the visiblity of the different data set periods. The _Interval Selector_ ( labeled B ) allows you to adjust the interval displayed in the chart. The options available here are dependent upon the length of the date range selected:

| Length of Date Range  | Interval Options  |
|---|---|
| One year or more | 'day', 'week', 'month', 'quarter', 'year' |
| 90 days to 1 year | 'day', 'week', 'month', 'quarter' |
| 1 month - 89 days | 'day', 'week', 'month' |
| 1 week - 28 days | 'day', 'week' |
| 1 day - 1 week  | 'day' |
| 1 day | 'day', 'hour' |

And lastly, you can adjust the type of chart being displayed ( labeled B ) between a bar or line chart.
