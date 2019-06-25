const hooks = [
  {
    hook: 'woocommerce_admin_report_table',
    title: 'Filter report table',
    desc: 'Enables manipulation of data used to create a report table.',
    type: 'filter',
    source: 'http://example.com',
  },
  {
    hook: 'woocommerce_admin_order_milestones_enabled',
    title: 'Enable milestones',
    desc: 'Filter to allow for disabling order milestones.',
    type: 'filter',
    source: 'http://example.com',
  },
];

export default hooks;
