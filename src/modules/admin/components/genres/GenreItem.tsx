import { IGenre } from "../../../genres/entities";

interface Props {
  genre: IGenre;
}

export const GenreItem = ({ genre }: Props) => {
  return (
    <div className="bg-gray-200 p-5 rounded-xl min-w-52">
      <h2>{genre.name}</h2>
    </div>
  );
};
