import { Genre } from "@/modules/shared/interfaces";

interface Props {
  genre: Genre;
}

export const GenreItem = ({ genre }: Props) => {
  return (
    <div className="bg-gray-200 p-5 rounded-xl min-w-52 flex-1">
      <h2 className="text-center">{genre.name}</h2>
    </div>
  );
};
