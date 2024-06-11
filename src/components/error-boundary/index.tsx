import React, { Component, ErrorInfo } from "react";
import { XCircleIcon } from "@/components/icons";

interface ErrorBoundaryProps extends React.PropsWithChildren { }

interface ErrorBoundaryState {
  error: Error | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {

  public state: ErrorBoundaryState = {
    error: null
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.error) {
      return (
        <div className="min-h-screen flex flex-col">
          <div className="flex-1 container py-4">
            <section role="alert" className="alert alert-error shadow-xl max-w-2xl mx-auto my-0">
              <XCircleIcon aria-label="Ícone de erro" className="size-16" />
              <div>
                <h3 className="font-bold text-xl">
                  Um erro inesperado acaba de acontecer
                </h3>
                <div className="text-base">
                  Detalhes: {" "}
                  <span className="font-semibold underline">
                    {this.state.error.message}
                  </span>
                </div>
              </div>
              <button
                className="btn btn-sm"
                onClick={() => this.setState({ error: null })}
              >
                Tentar novamente
              </button>
            </section>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
