"use client";

import { useRef, useState, type FormEvent } from "react";

import { FormError } from "@/components/auth/form-error";
import { SuccessFeedback } from "@/components/ui/feedback";
import { TextField } from "@/components/ui/form-controls";
import { requestPasswordReset } from "@/lib/auth/mock-auth";
import { isValidEmail } from "@/lib/auth/validation";

export function ForgotPasswordForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<string>();
  const [formError, setFormError] = useState<string>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(undefined);

    if (!email.trim() || !isValidEmail(email)) {
      setEmailError("Enter a valid email address.");
      requestAnimationFrame(() => {
        formRef.current
          ?.querySelector<HTMLElement>("[aria-invalid='true']")
          ?.focus();
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await requestPasswordReset(email);
      setIsComplete(true);
    } catch {
      setFormError("We couldn't start password recovery. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isComplete) {
    return (
      <SuccessFeedback title="Check your inbox">
        If an account matches {email.trim()}, you&apos;ll receive instructions
        to reset your password.
      </SuccessFeedback>
    );
  }

  return (
    <form
      className="grid gap-5"
      noValidate
      onSubmit={handleSubmit}
      ref={formRef}
    >
      {formError ? <FormError>{formError}</FormError> : null}
      <TextField
        autoComplete="email"
        error={emailError}
        inputMode="email"
        label="Email address"
        name="email"
        placeholder="you@business.com"
        required
        type="email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
          if (emailError) {
            setEmailError(undefined);
          }
        }}
      />
      <button
        className="mt-1 inline-flex min-h-12 items-center justify-center rounded-lg bg-emerald-950 px-5 font-semibold text-white transition hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800 disabled:cursor-wait disabled:opacity-70"
        disabled={isSubmitting}
        type="submit"
      >
        {isSubmitting ? "Sending instructions…" : "Send reset instructions"}
      </button>
    </form>
  );
}
