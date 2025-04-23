import { Pill } from ".";
import { useStoreGenres } from "../../../store";
import { IGenre } from "../../genres/entities";

interface IProps {
  genres: IGenre[];
}

export const GenresFilter = ({ genres }: IProps) => {
  const { selectedGenre, setSelectedGenre } = useStoreGenres();

  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {genres.map(({ id, name }) => (
        <Pill
          key={id}
          text={name}
          className={`!text-sm px-3 cursor-pointer transition-all select-none ${selectedGenre?.id === id ? "!bg-comp-green text-white" : ""}`}
          onClick={() => setSelectedGenre({ id, name })}
        />
      ))}
    </div>
  );
};
