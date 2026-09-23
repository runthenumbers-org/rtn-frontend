"use client";

import { useState } from "react";

import { TextField, type TextFieldProps } from "@/components/ui/form-controls";

type PasswordFieldProps = Omit<TextFieldProps, "endAdornment" | "type">;

export function PasswordField(props: PasswordFieldProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <TextField
      {...props}
      type={isVisible ? "text" : "password"}
      endAdornment={
        <button
          className="inline-flex min-h-9 items-center rounded-md px-2 text-xs font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-emerald-700"
          type="button"
          aria-label={isVisible ? "Hide password" : "Show password"}
          aria-pressed={isVisible}
          onClick={() => setIsVisible((visible) => !visible)}
        >
          {isVisible ? "Hide" : "Show"}
        </button>
      }
    />
  );
}
