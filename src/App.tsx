import { BrowserRouter, QueryClient, QueryClientProvider } from "@/core";
import { ConfirmDeleteProvider, CreateMovieProvider, MovieDetailsProvider } from "@contexts";
import { Router } from "@navigation";

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
