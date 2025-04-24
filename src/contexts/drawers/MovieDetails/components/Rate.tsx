import { memo } from "@/core/base";
import { Star } from "@/assets/icons";
import { useMovies } from "@movies/hooks";
import { useGlobalMovieDetails } from "@contexts/drawers/MovieDetails/";

interface Props {
  rate: number;
  movieId: number;
}

export const Rate = memo(({ rate, movieId }: Props) => {
  const { movieMutations } = useMovies();

  const { patchRate } = movieMutations;
  const { setMovie } = useGlobalMovieDetails();

  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  const handleRate = async (rate: number) => {
    if (movieId) {
      patchRate.mutate({ id: movieId, rate });
      setMovie((prev) => (prev ? { ...prev, rate } : null));
    }
  };

  return (
    <div className={` m-auto left-0 right-0 text-center flex gap-1`}>
      {stars.map((star) => (
        <Star
          key={star}
          className={`size-5 cursor-pointer hover:scale-[1.2] transition-all ${star <= rate ? "fill-yellow-400" : "fill-gray-400"}`}
          onClick={() => handleRate(star)}
        />
      ))}
    </div>
  );
});
