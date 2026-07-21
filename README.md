# MaxDevs Hub

## Overview

`MaxDevs Hub` is a modern React + Vite website for a web development agency. It includes packaged service pages, a portfolio showcase, a dynamic quote/contact form, a payment-style checkout page, a chat assistant widget, and Supabase Edge Function integration for form submissions.

This repository is intended for local development, deployment as a static frontend, and serverless function support through Supabase.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Routes and Pages](#routes-and-pages)
- [Core Integrations](#core-integrations)
- [Supabase Functions](#supabase-functions)
- [Deployment](#deployment)
- [Documentation](#documentation)
- [Notes](#notes)

## Features

- Responsive agency landing page with package pricing and portfolio case studies
- Package selection and checkout flow using React Router state
- Contact form that submits via Supabase Edge Function
- Simulated chat assistant component for user engagement
- Shadcn UI components and Tailwind CSS styling
- Supabase client configuration for API-driven requests

## Tech Stack

- Vite
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui component library
- React Router DOM
- Supabase JS
- @tanstack/react-query
- Lucide icons
- Sonner toast notifications

## Project Structure

- `src/`
  - `App.tsx` — root app and route configuration
  - `main.tsx` — app entry point
  - `pages/` — route pages: `Index`, `Packages`, `Portfolio`, `About`, `Contact`, `Billing`, `NotFound`
  - `components/` — reusable UI components, navigation, chat, billing/payment components
  - `integrations/supabase/` — Supabase client and typed integration helpers
  - `hooks/` — custom hooks such as toast handling
  - `components/ui/` — shared shadcn UI primitives and form helpers
- `supabase/`
  - `functions/` — serverless edge functions for API handlers
  - `config.toml` — Supabase project configuration
- `public/` — static assets and preview images
- `vite.config.ts` — Vite project configuration and aliasing
- `package.json` — project dependencies and npm scripts

## Getting Started

1. Clone the repository:

```bash
git clone <YOUR_GIT_URL>
cd "maxdevs package website/maxdevs-hub"
```

2. Install dependencies:

```bash
npm install
```

3. Create an environment file `.env` in the project root with the required variables listed below.

4. Start the development server:

```bash
npm run dev
```

5. Open the local site at `http://localhost:8080`.

## Environment Variables

Create a `.env` file in the repository root and add the following variables:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_public_key
```

For Supabase Edge Functions, configure the following in your Supabase project or deployment environment:

```env
RESEND_API_KEY=your_resend_api_key
GOOGLE_SHEETS_WEBHOOK_URL=https://your-webhook-url
```

> Note: The frontend uses `VITE_` prefixed variables. Edge functions should use standard environment names configured via Supabase.

## Available Scripts

- `npm run dev` — start Vite development server
- `npm run build` — build production assets
- `npm run build:dev` — build production assets using development mode
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint across the project

## Routes and Pages

- `/` — Home / Landing page
- `/packages` — Pricing and package selection
- `/portfolio` — Portfolio case studies and examples
- `/about` — About MaxDevs and process overview
- `/contact` — Contact form with Supabase function submission
- `/billing` — Checkout-style page for selected package
- `*` — 404 Not Found

## Core Integrations

### Supabase

- `src/integrations/supabase/client.ts` — initializes Supabase client using `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY`
- `src/pages/Contact.tsx` — submits data through `supabase.functions.invoke("submit-form", { body: formData })`

### ChatBot

- `src/components/ChatBot.tsx` — local simulated assistant widget with canned responses and typing animation

### Billing Flow

- `src/pages/Billing.tsx` — reads package data from router state and renders `BillingForm`
- `src/components/BillingForm.tsx` — collects payment-style data and shows a simulated success toast

## Supabase Functions

- `supabase/functions/submit-form/index.ts`
  - Receives JSON data from the contact form
  - Sends email through Resend API
  - Optionally logs submissions to Google Sheets via webhook
  - Returns a success payload or error message

- `supabase/functions/chat/index.ts`
  - Example edge function for chat responses
  - Returns canned chat replies based on message content

## Deployment

### Static Frontend

This project can be deployed as a static site on providers such as Vercel, Netlify, or Supabase Hosting.

1. Build production assets:

```bash
npm run build
```

2. Deploy the contents of `dist/` to your static host.

### Supabase Functions

If you choose Supabase Hosting, deploy the `supabase/functions/` directory along with the frontend.

> Ensure the `RESEND_API_KEY` and `GOOGLE_SHEETS_WEBHOOK_URL` values are configured in your Supabase project environment.

## Documentation

Additional documentation is available in `docs/README.md`.

## Notes

- The billing form is a demo flow and does not integrate with a real payment gateway.
- The chat assistant uses scripted responses, not a live AI backend.
- The contact form requires Supabase Edge Function deployment to send email and log submissions.
- Replace the placeholder contact details and logos with your own branded values.
