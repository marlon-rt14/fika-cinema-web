import { Genre } from "@/modules/shared/interfaces";
import { useStoreGenres } from "@/store";
import { Pill } from "@movies/components";

interface Props {
  genres: Genre[];
}

export const GenresFilter = ({ genres }: Props) => {
  const { selectedGenre, setSelectedGenre } = useStoreGenres();

  return (
    <div className="flex flex-wrap gap-5 justify-center max-sm:hidden">
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
