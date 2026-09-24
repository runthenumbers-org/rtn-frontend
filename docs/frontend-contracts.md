# Frontend integration contracts

This document records the boundaries currently simulated by the UI. The mock
implementations are replaceable adapters, not production authentication,
authorization, persistence, or financial data.

## Authentication session

The frontend needs an authenticated-session resolver that can distinguish:

```ts
interface SessionUser {
  id: string;
  email: string;
  displayName: string;
  onboardingComplete: boolean;
  activeBusinessId?: string;
}
```

Expected navigation behavior:

- unauthenticated application request → `/sign-in`
- authenticated user without a completed business profile → `/onboarding`
- authenticated user with a completed profile visiting an account screen →
  `/dashboard`
- sign-up success → `/onboarding`
- sign-in success → `/dashboard`
- sign-out success → `/sign-in`

These redirects require server-side enforcement when the authentication
provider is integrated. The current session-storage gates only model the UI
journey and provide no security boundary.

### Authentication errors

Sign-in failures must not reveal whether an email address is registered. The UI
expects a generic invalid-credentials error and a separate safe unexpected
error. Sign-up may report that an email is already in use because the user can
then sign in or request recovery.

Password recovery must return the same successful response whether or not an
account exists.

## Business onboarding

The frontend submits:

```ts
interface BusinessDetailsInput {
  businessName: string;
  businessType?: BusinessType;
  country?: CountryCode;
  baseCurrency: CurrencyCode;
  secondaryCurrency?: CurrencyCode;
}
```

Rules:

- `businessName` is required after trimming.
- `baseCurrency` must be in the canonical currency catalogue.
- `secondaryCurrency` is optional and must differ from `baseCurrency`.
- optional business type and country values must come from their catalogues.
- successful creation associates the business with the authenticated internal
  user, makes it active, and marks onboarding complete atomically.
- failed creation leaves onboarding incomplete and returns field or general
  errors without discarding entered values.

The backend must not trust catalogue membership or ownership claims from the
browser. It must validate them independently.

## Dashboard view model

The dashboard expects one payload shaped like:

```ts
interface DashboardViewModel {
  business: {
    id: string;
    name: string;
    baseCurrency: CurrencyCode;
  };
  materialCount: number;
  batchCount: number;
  recordedBatchCosts: string;
  recentBatches: Array<{
    id: string;
    name: string;
    status: "Draft" | "Costed";
    outputUnits: string;
    totalCost: string;
    costPerUnit: string;
  }>;
}
```

Authoritative decimal values should arrive as strings. Formatting belongs to
the presentation layer; financial arithmetic does not.

An empty `recentBatches` array produces the first-time state. A populated array
produces the recent-batches table. Counts must be scoped to the active business.

## Batch catalogue and detail view models

The batches catalogue expects records scoped to the active business, with a
stable identifier, human-readable reference, status, planned or completed date,
output description, yield, total cost, and cost per unit. Search and status
filtering are currently presentation concerns and can move to query parameters
when the backend supports them.

The batch detail payload also supplies read-only formulation, packaging, and
production-cost lines plus an explicit cost summary. All monetary values arrive
as authoritative decimal strings. The frontend formats those values in the
active workspace currency but does not derive line totals, category subtotals,
batch totals, yields, or unit costs.

An empty catalogue produces the first-time state. An unknown identifier produces
the batch-not-found state without exposing storage or ownership details.

## Error response

API errors should use one predictable structure:

```ts
interface ApiError {
  error: {
    code: string;
    message: string;
    fieldErrors?: Record<string, string[]>;
    requestId?: string;
  };
}
```

Unexpected errors must not expose stack traces, provider details, credentials,
or database information. The frontend should map known field errors to their
controls and show a safe general message for everything else.
