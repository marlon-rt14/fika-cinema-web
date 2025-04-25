import { memo } from "@/core/base";
import { Movie } from "@/modules/shared/interfaces";
import { TableRowCell, IconButton } from "@admin/components";
import { Delete, Update } from "@/assets/icons";

interface ITableRowProps {
  movie: Movie;
  onUpdate: (movie: Movie) => void;
  onDelete: (movieId: number) => void;
}

export const TableRow = memo(({ movie, onUpdate, onDelete }: ITableRowProps) => {
  const { cast, genres, overview, id, poster_path, release_date, rate, title } = movie;

  return (
    <div className="flex gap-1 w-full justify-evenly  mt-3 ">
      <TableRowCell className="min-w-32">{title}</TableRowCell>
      <TableRowCell className="min-w-52">{overview}</TableRowCell>
      <TableRowCell className="min-w-20">
        <a href={poster_path} target="_blank" rel="noopener noreferrer" className="underline text-blue-600">
          Open image
        </a>
      </TableRowCell>
      <TableRowCell className="min-w-24">{release_date}</TableRowCell>
      <TableRowCell className="min-w-32">{genres.map((genre) => genre.name).join(", ")}</TableRowCell>
      <TableRowCell className="min-w-32">{cast.map((cast) => cast.name).join(", ")}</TableRowCell>
      <TableRowCell className="min-w-12 text-center">{rate}</TableRowCell>
      <TableRowCell className="!border-r-0 flex gap-1 justify-center min-w-20">
        <div>
          <IconButton className=" text-sky-700 hover:bg-sky-700/10 hover:text-sky-700/80 " onClick={() => onUpdate(movie)}>
            <Update />
          </IconButton>
        </div>
        <div>
          <IconButton className=" text-red-400 hover:bg-red-400/10 hover:text-red-400/80 " onClick={() => onDelete(id)}>
            <Delete />
          </IconButton>
        </div>
      </TableRowCell>
    </div>
  );
});
