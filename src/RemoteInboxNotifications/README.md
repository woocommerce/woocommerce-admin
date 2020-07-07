# Remote Inbox Notifications

This is a remote inbox notifications engine in WooCommerce admin, which polls some JSON feeds (see `DataSourcePoller.php`) containing specifications of remote inbox notifications, including rules that, when satisfied, display the notification in the WooCommerce Admin screens.

The interesting entry points are the poller (`DataSourcePoller.php`) and the engine (`RemoteInboxNotificationsEngine.php`), both of which run daily as part of the `wc-admin-daily` cron task.

Following is the structure of the JSON feed, including the different rules that can be used to build up an inbox notification specification.

## JSON file:
```
[
	<spec>,
	...
]
```

## Spec:
```
{
	"slug": "ad-for-automate-woo-2020-04-20",
	"type": "info",
	"status": "unactioned",
	"is_snoozable": 0,
	"source": "woocommerce.com",
	"locales": [
		<Locale>,
		...
	],
	"actions": [
		<Action>,
		...
	],
	"rules": [
		<Rule>,
		...
	]
}
```

The slug *must* be unique across all notes (not just the notes that are being implemented in the feed) otherwise it could lead to unexpected behavior.

Valid values for `type` are:

- `error`
- `warning`
- `update`
- `info`
- `marketing`
- `survey`

`info`, `marketing`, and `survey` types will appear in the inbox. Other types appear in the head of the page.

The `status` is the *initial* note status to be set when the rules are satisfied. Valid values for `status` are:

- `unactioned`
- `actioned`
- `snoozed`

The status will usually be `unactioned`, as this will get the note to appear.

### Locale
The note locales contain the title and content of the note. Having this broken up by locale allows different translations of the note to be used. The default locale used if none of the locales match the WordPress locale is `en_US`.

```
{
	"locale": "en_US",
	"title": "Ad for Automate Woo",
	"content": "Hi There! This is an ad for Automate Woo."
},
{
	"locale": "en_AU",
	"title": "G'day. Ad for Automate Woo, in en-AU.",
	"content": "en-AU content"
},
{
	"locale": "fr_FR",
	"title": "Annonce pour automatiser woo",
	"content": "Salut! Ceci est une publicité pour Automate Woo."
}
```

### Action
These are the actions that can be interacted with on the note. This might be a link to a blog post, or an internal link to an admin page.

```
{
	"name": "install-automate-woo",
	 "locales": [
		<ActionLocale>,
		...
	],
	"url": "?page=automatewoo-dashboard",
	"url_is_admin_query": true,
	"is_primary": true,
	"status": "actioned"
},
{
	"name": "set-up-concierge",
	"locales": [
		{
			"locale": "en_US",
			"label": "Schedule free session"
		}
	],
	"url": "https:\/\/wordpress.com\/me\/concierge",
	"url_is_admin_query": false,
	"is_primary": false,
	"status": "actioned"
},
```

`name` must be unique to the created note.

The action locales contain the label of the action. Having this broken up by locale allows different translations of the note to be used. The default locale used if none of the locales match the WordPress locale is `en_US`.

The `status` is what the status of the created note will be set to after interacting with the action.

#### ActionLocale
```
{
	"locale": "en_US",
	"label": "Install"
}
```

## Rule
Rules in an array are executed as an AND operation. If there are no rules in the array the result is false and the specified notification is not shown.

### Plugins activated
```
{
	"type": "plugins_activated",
	"plugins": [
		"plugin-slug-1',
		"plugin-slug-2"
	]
}
```

### Publish after time
```
{
	"type": "publish_after_time",
	"publish_after": "2020-04-22 00:00:00"
}
```

### Publish before time
Note that using both `publish_after_time` and `publish_before_time` allows timeboxing a note which could be useful for promoting a sale.

```
{
	"type": "publish_before_time",
	"publish_before": "2020-04-22 00:00:00"
}
```

### Not
Note that the rules in operand get ANDed together into a single boolean.

```
{
	"type": "not",
	"operand": [
		<Rule>,
		...
	]
}
```

### Or
Note that if the operands are an array of `Rule`s, each operand is treated as an AND operation.

```
{
	"type": "or",
	"operands": [
		[
			<Rule>,
			...
		],
		[
			<Rule>,
			...
		]
	]
}
```

alternatively:

```
{
	"type": "or",
	"operands": [
		<Rule>,
		...
	]
}
```

### Fail
This just returns a false value.

```
{
	"type": "fail"
}
```

### Plugin version
This compares the installed version of the plugin to the required version, using the operator. If the plugin isn’t activated this returns false.

```
{
	"type": "plugin_version",
	"plugin": "jetpack",
	"version": "8.4.1",
	"operator": "="
}
```

### Stored state
```
{
	"type": "stored_state",
	"index": "there_were_no_products",
	"operation": "=",
	"value": true
}
```

There are only a limited amount of indices available to this rule, and new indices will need a new version of the WC Admin plugin to be installed.

The currently available indices are:

```
there_were_no_products
there_are_now_products
```

### Product count
```
{
	"type": "product_count",
	"operation": ">",
	"value": 10
}
```

### Order count
```
{
	"type": "order_count",
	"operation": ">",
	"value": 10
}
```

### WooCommerce Admin active for
```
{
	"type": "wcadmin_active_for",
	"operation": ">",
	"days": 8
}
```

### Onboarding profile
```
{
	"type": "onboarding_profile",
	"index": "revenue",
	"operation": "=",
	"value": "none"
}
```
This allows access to the onboarding profile that was built up in the onboarding wizard. The above example passes when the current revenue selected was "none".