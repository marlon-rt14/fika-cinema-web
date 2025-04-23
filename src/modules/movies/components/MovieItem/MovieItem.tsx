import { memo } from "react";
import { Genres, Overview, Rate, Title } from ".";
import { useGlobalMovieDetails } from "../../../../contexts";
import { IMovie } from "../../entities";
import "./styles.css";

interface IProps {
  movie: IMovie;
}

export const MovieItem = memo(({ movie }: IProps) => {
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
