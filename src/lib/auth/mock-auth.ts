export type AuthErrorCode =
  "EMAIL_IN_USE" | "INVALID_CREDENTIALS" | "UNEXPECTED";

export class AuthError extends Error {
  constructor(public readonly code: AuthErrorCode) {
    super(code);
    this.name = "AuthError";
  }
}

interface SignInInput {
  email: string;
  password: string;
}

interface SignUpInput extends SignInInput {
  name: string;
}

const pause = () => new Promise((resolve) => setTimeout(resolve, 650));

export async function signIn(input: SignInInput) {
  await pause();

  const email = input.email.trim().toLowerCase();

  if (email === "invalid@example.com") {
    throw new AuthError("INVALID_CREDENTIALS");
  }

  if (email === "error@example.com") {
    throw new AuthError("UNEXPECTED");
  }

  startMockSession("returning");
}

export async function signUp(input: SignUpInput) {
  await pause();

  const email = input.email.trim().toLowerCase();

  if (email === "existing@example.com") {
    throw new AuthError("EMAIL_IN_USE");
  }

  if (email === "error@example.com") {
    throw new AuthError("UNEXPECTED");
  }

  startMockSession("new");
}

export async function requestPasswordReset(email: string) {
  void email;
  await pause();
}
import { startMockSession } from "@/lib/auth/mock-session";
