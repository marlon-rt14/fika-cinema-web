import { Input } from "@components";
import { ListGenres, MainLayout } from "@admin/components";
import { useQuery } from "@/modules/shared/hooks";

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
