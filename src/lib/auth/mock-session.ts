export interface MockSession {
  journey: "new" | "returning";
  onboardingComplete: boolean;
}

const storageKey = "rtn:preview-session";
const listeners = new Set<() => void>();
let cachedRawValue: string | null | undefined;
let cachedSession: MockSession | null = null;

function isMockSession(value: unknown): value is MockSession {
  if (!value || typeof value !== "object") {
    return false;
  }

  const session = value as Record<string, unknown>;

  return (
    (session.journey === "new" || session.journey === "returning") &&
    typeof session.onboardingComplete === "boolean"
  );
}

export function getMockSessionSnapshot(): MockSession | null {
  if (typeof window === "undefined") {
    return null;
  }

  const rawValue = window.sessionStorage.getItem(storageKey);

  if (rawValue === cachedRawValue) {
    return cachedSession;
  }

  cachedRawValue = rawValue;

  if (!rawValue) {
    cachedSession = null;
    return cachedSession;
  }

  try {
    const parsedValue: unknown = JSON.parse(rawValue);
    cachedSession = isMockSession(parsedValue) ? parsedValue : null;
  } catch {
    cachedSession = null;
  }

  return cachedSession;
}

export function getMockSessionServerSnapshot() {
  return null;
}

export function subscribeToMockSession(listener: () => void) {
  listeners.add(listener);

  function handleStorage(event: StorageEvent) {
    if (event.key === storageKey) {
      cachedRawValue = undefined;
      listener();
    }
  }

  window.addEventListener("storage", handleStorage);

  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", handleStorage);
  };
}

function saveSession(session: MockSession) {
  const rawValue = JSON.stringify(session);
  window.sessionStorage.setItem(storageKey, rawValue);
  cachedRawValue = rawValue;
  cachedSession = session;
  listeners.forEach((listener) => listener());
}

export function startMockSession(journey: MockSession["journey"]) {
  saveSession({
    journey,
    onboardingComplete: journey === "returning",
  });
}

export function completeMockOnboarding() {
  const currentSession = getMockSessionSnapshot();

  saveSession({
    journey: currentSession?.journey ?? "new",
    onboardingComplete: true,
  });
}

export function clearMockSession() {
  window.sessionStorage.removeItem(storageKey);
  cachedRawValue = null;
  cachedSession = null;
  listeners.forEach((listener) => listener());
}
