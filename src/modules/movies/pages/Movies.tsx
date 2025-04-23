import { lazy, Suspense, useDeferredValue } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { LoadingLazyComponent } from "../../../components/loaders";
import { ErrorFallbackRouter } from "../../../components/Partials";
import { useStoreGenres } from "../../../store";
import { useQueryGenres } from "../../genres/hooks";
import { GenresFilter } from "../components";

const LazyMovies = lazy(() => import("../components/ListMovies"));

export const Movies = () => {
  const { genres } = useQueryGenres();
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
