import { TableRowCell } from "@admin/components/movies";

export const TableRowHead = () => {
  return (
    <div className="flex gap-1  w-full justify-evenly [&>div]:font-bold [&>div]:text-center">
      <TableRowCell className="min-w-32">Title</TableRowCell>
      <TableRowCell className="min-w-52">Overview</TableRowCell>
      <TableRowCell className="min-w-20">Poster</TableRowCell>
      <TableRowCell className="min-w-24">Release date</TableRowCell>
      <TableRowCell className="min-w-32">Genres</TableRowCell>
      <TableRowCell className="min-w-32">Cast</TableRowCell>
      <TableRowCell className="min-w-12">Rate</TableRowCell>
      <TableRowCell className="!border-r-0 min-w-20">Actions</TableRowCell>
    </div>
  );
};
