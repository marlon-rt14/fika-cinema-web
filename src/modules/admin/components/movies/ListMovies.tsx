import { TableRowHead, TableRowBody } from "@admin/components/movies";

export const ListMovies = () => {
  return (
    <div className="bg-gray-200 p-5 rounded-xl relative flex-1 flex flex-col overflow-auto">
      <TableRowHead />
      <TableRowBody />
    </div>
  );
};
