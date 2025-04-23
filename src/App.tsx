import { BrowserRouter } from "react-router";
import { Router } from "./navigation/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfirmDeleteProvider, CreateMovieProvider, MovieDetailsProvider } from "./contexts";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <MovieDetailsProvider>
          <ConfirmDeleteProvider>
            <CreateMovieProvider>
              <BrowserRouter>
                <Router />
              </BrowserRouter>
            </CreateMovieProvider>
          </ConfirmDeleteProvider>
        </MovieDetailsProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
