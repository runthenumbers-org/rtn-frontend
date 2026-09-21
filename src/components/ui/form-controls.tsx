"use client";

import {
  useId,
  type InputHTMLAttributes,
  type ReactNode,
  type SelectHTMLAttributes,
  type TextareaHTMLAttributes,
} from "react";

interface FieldContentProps {
  description?: string;
  error?: string;
  id: string;
  label: string;
  required?: boolean;
}

function FieldLabel({ id, label, required }: FieldContentProps) {
  return (
    <label className="text-sm font-medium text-slate-900" htmlFor={id}>
      {label}
      {required ? (
        <span className="ml-1 text-red-700" aria-hidden="true">
          *
        </span>
      ) : null}
    </label>
  );
}

function FieldMessage({ description, error, id }: FieldContentProps) {
  if (error) {
    return (
      <p className="text-sm text-red-700" id={`${id}-error`} role="alert">
        {error}
      </p>
    );
  }

  if (description) {
    return (
      <p className="text-sm text-slate-600" id={`${id}-description`}>
        {description}
      </p>
    );
  }

  return null;
}

function describedBy(
  id: string,
  description?: string,
  error?: string,
  externalId?: string,
) {
  return (
    [
      error ? `${id}-error` : description ? `${id}-description` : undefined,
      externalId,
    ]
      .filter(Boolean)
      .join(" ") || undefined
  );
}

const controlClassName =
  "min-h-11 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-base text-slate-950 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500 aria-invalid:border-red-700 aria-invalid:focus:border-red-700 aria-invalid:focus:ring-red-700/20";

interface SharedFieldProps {
  description?: string;
  error?: string;
  label: string;
}

export interface TextFieldProps
  extends
    Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    SharedFieldProps {}

export function TextField({
  "aria-describedby": ariaDescribedBy,
  className,
  description,
  error,
  id: suppliedId,
  label,
  required,
  ...inputProps
}: TextFieldProps) {
  const generatedId = useId();
  const id = suppliedId ?? generatedId;

  return (
    <div className="grid gap-2">
      <FieldLabel id={id} label={label} required={required} />
      <input
        {...inputProps}
        aria-describedby={describedBy(id, description, error, ariaDescribedBy)}
        aria-invalid={error ? true : undefined}
        className={[controlClassName, className].filter(Boolean).join(" ")}
        id={id}
        required={required}
      />
      <FieldMessage
        description={description}
        error={error}
        id={id}
        label={label}
        required={required}
      />
    </div>
  );
}

export interface SelectFieldProps
  extends SelectHTMLAttributes<HTMLSelectElement>, SharedFieldProps {}

export function SelectField({
  "aria-describedby": ariaDescribedBy,
  children,
  className,
  description,
  error,
  id: suppliedId,
  label,
  required,
  ...selectProps
}: SelectFieldProps) {
  const generatedId = useId();
  const id = suppliedId ?? generatedId;

  return (
    <div className="grid gap-2">
      <FieldLabel id={id} label={label} required={required} />
      <select
        {...selectProps}
        aria-describedby={describedBy(id, description, error, ariaDescribedBy)}
        aria-invalid={error ? true : undefined}
        className={[controlClassName, className].filter(Boolean).join(" ")}
        id={id}
        required={required}
      >
        {children}
      </select>
      <FieldMessage
        description={description}
        error={error}
        id={id}
        label={label}
        required={required}
      />
    </div>
  );
}

export interface TextareaFieldProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>, SharedFieldProps {}

export function TextareaField({
  "aria-describedby": ariaDescribedBy,
  className,
  description,
  error,
  id: suppliedId,
  label,
  required,
  rows = 4,
  ...textareaProps
}: TextareaFieldProps) {
  const generatedId = useId();
  const id = suppliedId ?? generatedId;

  return (
    <div className="grid gap-2">
      <FieldLabel id={id} label={label} required={required} />
      <textarea
        {...textareaProps}
        aria-describedby={describedBy(id, description, error, ariaDescribedBy)}
        aria-invalid={error ? true : undefined}
        className={[controlClassName, "resize-y", className]
          .filter(Boolean)
          .join(" ")}
        id={id}
        required={required}
        rows={rows}
      />
      <FieldMessage
        description={description}
        error={error}
        id={id}
        label={label}
        required={required}
      />
    </div>
  );
}

export function FormActions({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col-reverse gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:justify-end">
      {children}
    </div>
  );
}
