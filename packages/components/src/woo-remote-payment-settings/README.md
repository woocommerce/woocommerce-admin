# WooRemotePaymentSettings

A Slotfill component that will replace the <Settings /> component involved in displaying the form while adding a gateway via the payment task.

## Usage

```jsx
<WooRemotePaymentSettings id={ key }>
  <p>Fill Content</p>
</WooRemotePaymentSettings>

<WooRemotePaymentSettings.Slot id={ key } />
```

### Props

| Name | Type   | Default   | Description                                                                            |
| ---- | ------ | --------- | -------------------------------------------------------------------------------------- |
| `id` | String | undefined | The identifier of the Slot. This should be unique, and the same for both fill and slot |
