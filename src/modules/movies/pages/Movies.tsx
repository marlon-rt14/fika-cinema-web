import { lazy, useDeferredValue, ErrorBoundary, Suspense } from "@core/imports";
import { ErrorFallbackRouter, LoadingLazyComponent } from "@/components";
import { useStoreGenres } from "@/store";
import { useGenres } from "@genres/hooks";
import { GenresFilter } from "@movies/components";

const LazyMovies = lazy(() => import("../components/ListMovies"));

export const Movies = () => {
  const { genres } = useGenres();
  const { selectedGenre } = useStoreGenres();

  const deferSelectedGenre = useDeferredValue(selectedGenre);

  return (
    <div className="flex flex-col gap-5">
      <div className="py-5 px-10">
        {/* <ListBox data={genres} selectedItem={selectedGenre} setSelectedItem={handleChange} /> */}
        <GenresFilter genres={genres} />
      </div>
      <ErrorBoundary FallbackComponent={ErrorFallbackRouter} resetKeys={[deferSelectedGenre]}>
        <Suspense fallback={<LoadingLazyComponent message="Loading movies..." />}>
          <LazyMovies selectedGenre={deferSelectedGenre} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};
