import { Input } from "../../../components/common";
import { ListGenres, MainLayout } from "../components";
import { useQuery } from "../hooks";

export const Genres = () => {
  const { query, handleSearch } = useQuery("");

  return (
    <MainLayout title="Genres">
      <div className="flex justify-between items-center">
        <Input placeholder="Search..." value={query} onChange={handleSearch} className="placeholder:text-gray-400" />
        {/* <Button startIcon={<Add />} onClick={handleAdd}>
          Add
        </Button> */}
      </div>
      <ListGenres />
    </MainLayout>
  );
};
