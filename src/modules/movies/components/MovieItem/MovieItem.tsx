import { memo } from "@/core/base";
import { useGlobalMovieDetails } from "@/contexts";
import { Genres, Overview, Rate, Title } from "@movies/components";
import { Movie } from "@/modules/shared/interfaces";
import "./styles.css";

interface Props {
  movie: Movie;
}

export const MovieItem = memo(({ movie }: Props) => {
  const { title, overview, rate, poster_path, genres } = movie;

  const { onOpen } = useGlobalMovieDetails();

  const onClick = () => onOpen(movie);

  return (
    <div className="movie-item" style={{ backgroundImage: `url(${poster_path})` }} onClick={onClick}>
      <div className="movie-item__content">
        <Genres genres={genres} />
        <div className="flex flex-col gap-1">
          <Title title={title} />
          <Overview text={overview} />
        </div>
        <Rate rate={rate} />
      </div>
    </div>
  );
});
