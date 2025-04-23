import { TableRowCell } from ".";

export const TableRowHead = () => {
  return (
    <div className="flex gap-1  w-full justify-evenly [&>div]:font-bold [&>div]:text-center">
      <TableRowCell>Title</TableRowCell>
      <TableRowCell>Overview</TableRowCell>
      <TableRowCell>Poster</TableRowCell>
      <TableRowCell>Release date</TableRowCell>
      <TableRowCell>Genres</TableRowCell>
      <TableRowCell>Cast</TableRowCell>
      <TableRowCell>Rate</TableRowCell>
      <TableRowCell className="!border-r-0">Actions</TableRowCell>
    </div>
  );
};
