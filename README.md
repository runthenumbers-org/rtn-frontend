# RTN Frontend

The customer-facing RTN application for managing materials, planning batches,
and understanding production costs.

## Requirements

- Node.js 24 or newer
- npm 11 or newer

The supported Node.js version is recorded in `.nvmrc`. If you use `nvm`, run:

```bash
nvm install
nvm use
```

## Local development

Install dependencies and create your local environment file:

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment configuration

Environment files live at the project root, not inside `src/`.

- `.env.example` documents the variables expected by the application and is
  safe to commit.
- `.env.local` contains developer-specific values and must never be committed.
- Variables prefixed with `NEXT_PUBLIC_` are included in the browser bundle at
  build time. They must never contain secrets.
- Server-only variables must not use the `NEXT_PUBLIC_` prefix.
- Netlify should provide production values through its environment settings.

No secrets are required by the current UI-only foundation. Runtime validation
will be added when the first required integration variable is introduced.

## Quality commands

```bash
npm run lint
npm run typecheck
npm run format:check
npm run check
npm run build
```

Use `npm run format` to apply the repository formatting rules.

Reusable form and feedback patterns are documented in
[`docs/ui-conventions.md`](docs/ui-conventions.md).

## Route structure

Route groups organize public account screens separately from workspace screens
without changing their URLs.

```text
src/app/
├── (auth)/
│   ├── sign-in/
│   ├── sign-up/
│   └── onboarding/
├── (app)/
│   ├── dashboard/
│   ├── materials/
│   │   ├── new/
│   │   └── [materialId]/edit/
│   ├── batches/
│   │   ├── new/
│   │   └── [batchId]/
│   └── settings/
├── globals.css
├── layout.tsx
└── page.tsx
```

The typed route catalogue is defined in `src/lib/routes.ts`. Authentication,
authorization, and onboarding redirects are intentionally deferred until the
relevant product and provider decisions are made.

## Deployment

The `master` branch deploys to Netlify at
[rtnweb.netlify.app](https://rtnweb.netlify.app/).
