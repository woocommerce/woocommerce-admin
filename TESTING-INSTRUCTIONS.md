Testing instructions
====================

## 2.0.0

### Fix: allow for more terms to be shown for product attributes in the Analytics orders report. #5868

1. Create a product attribute
2. Give the attribute more than 10 terms
3. Go to Analytics -> Orders
4. Add an attribute filter to the list, choose your attribute.
5. Go to the second input field and click on it, a result set of all your terms should appear

### Add: new inbox message - Getting started in Ecommerce - watch this webinar. #6086

- First you'll need to make sure you meet the criteria for the note:
    1. obw is done
    2. revenue is between 0-2500
    3. do not check "setting up for client" in obw
    4. store should have no products
- Next you need to install WP Crontrol, go to its list of cron events and click "run now" on "wc_admin_daily"
- Confirm the new note is displayed and that the content matches that specified below:
    - Title: Getting Started in eCommerce - webinar
    - Copy: We want to make eCommerce and this process of getting started as easy as possible for you. Watch this webinar to get tips on how to have our store up and running in a breeze.
    - CTA leads to: https://youtu.be/V_2XtCOyZ7o
    - CTA label: Watch the webinar

### Update: store deprecation welcome modal support doc link #6094

- Starting with a fresh store (or by deleting the woocommerce_task_list_welcome_modal_dismissed option), visit /wp-admin/admin.php?page=wc-admin. You should see the standard welcome modal.
- Add &from-calypso to the URL. You should see the Calypso welcome modal.
- Notice "Learn more" links to https://wordpress.com/support/new-woocommerce-experience-on-wordpress-dot-com/
