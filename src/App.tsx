import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "@/components/error-boundary";
import { ThemeProvider } from "@/context/theme";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Routes from "./routes";

const queryClient = new QueryClient();

function App() {

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ThemeProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <div className="flex-1 flex">
                <main className="container py-8">
                  <Routes />
                </main>
              </div>
              <Footer />
            </div>
          </ThemeProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
