# WooRemotePayment

A Slotfill component that will replace the <Stepper /> involved in the installation for a gateway via the payment task.

## Usage

```jsx
<WooRemotePayment id={ key }>
  <p>Fill Content</p>
</WooRemotePayment>

<WooRemotePayment.Slot id={ key } />
```

### Props

| Name | Type   | Default   | Description                                                                            |
| ---- | ------ | --------- | -------------------------------------------------------------------------------------- |
| `id` | String | undefined | The identifier of the Slot. This should be unique, and the same for both fill and slot |
