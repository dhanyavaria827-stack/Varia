import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

// A last-resort safety net. If any component throws during render, React
// unmounts the whole tree by default — this catches that and shows a
// simple, on-brand fallback instead of a blank white screen, with a way
// back to a working page.
export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Uncaught render error:", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-parchment px-5 text-center text-ink">
          <h1 className="font-display text-2xl font-medium">Something went wrong</h1>
          <p className="max-w-sm text-ink-soft">
            This page hit an unexpected error. Reloading usually fixes it.
          </p>
          <a
            href="."
            className="mt-2 inline-flex items-center justify-center rounded-sm bg-camel-600 px-6 py-3 text-sm font-medium uppercase tracking-[0.06em] text-camel-50 shadow-soft transition hover:bg-camel-700"
          >
            Reload
          </a>
        </div>
      );
    }
    return this.props.children;
  }
}
