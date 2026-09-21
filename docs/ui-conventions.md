# UI conventions

These conventions keep forms and page feedback consistent and accessible.

## Forms

Use the shared controls from `src/components/ui/form-controls.tsx` instead of
assembling labels, inputs, and messages independently.

```tsx
<TextField
  label="Business name"
  name="businessName"
  autoComplete="organization"
  description="Use the name customers recognize."
  error={errors.businessName}
  required
/>
```

Rules:

- Every control has a visible label.
- Placeholder text is an example, never a replacement for a label.
- Required fields use the native `required` attribute.
- Help text explains format or consequence before submission.
- Field errors are specific, actionable, and associated with their control.
- Validate after blur or submission; do not report errors while the user is
  still entering an initial value.
- Preserve entered values after validation or server failures.
- Disable submission only while a request is in progress or when submission
  would be unsafe.
- Put secondary actions before the primary action in the DOM. `FormActions`
  presents them in the expected visual order on wider screens.
- Use the correct `type`, `inputMode`, and `autoComplete` attributes.
- Do not perform authoritative financial calculations inside form components.

## Feedback states

Use the exports from `src/components/ui/feedback.tsx`:

- `LoadingState` for an initial region or page load. Provide a precise `label`
  for assistive technology when “Loading” lacks context.
- `EmptyState` when a successful request returns no records. Explain the next
  useful action rather than treating an empty result as an error.
- `ErrorState` when content cannot be loaded. Pass a retry control through
  `action` when retrying is possible.
- `SuccessFeedback` for confirmation that follows a user action. Keep the
  message specific and do not rely on colour alone.

Loading and success announcements are polite. Errors are assertive so urgent
failures are announced immediately. Avoid rendering multiple live regions for
the same event.
