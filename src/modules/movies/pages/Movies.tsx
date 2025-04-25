import { ErrorFallbackRouter, ListBox, LoadingLazyComponent } from "@/components";
import { ErrorBoundary, lazy, Suspense, useDeferredValue } from "@/core";
import { useStoreGenres } from "@/store";
import { useGenres } from "@genres/hooks";
import { FAB, GenresFilter } from "@movies/components";

const LazyMovies = lazy(() => import("@movies/components/ListMovies"));

export const Movies = () => {
  const { genres } = useGenres();
  const { selectedGenre, setSelectedGenre: handleChange } = useStoreGenres();

  const deferSelectedGenre = useDeferredValue(selectedGenre);

  return (
    <div className="flex flex-col gap-5">
      <FAB />
      <div className="py-5 px-10">
        <ListBox data={genres} selectedItem={selectedGenre} setSelectedItem={handleChange} wrapperProps={{ className: "sm:hidden max-sm:visible m-auto" }} />
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
