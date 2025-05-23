import { Input, Button } from "@components";
import { MainLayout, ListMovies } from "@admin/components";
import { useGlobalCreateMovie } from "@/contexts";
import { useQuery } from "@/modules/shared/hooks";
import { Add } from "@/assets/icons";

export const Movies = () => {
  const { onOpen } = useGlobalCreateMovie();

  const { query, handleSearch } = useQuery("");

  const handleAdd = () => {
    onOpen();
  };

  return (
    <MainLayout title="Movies">
      <div className="flex flex-col gap-5 w-full overflow-auto">
        <div className="flex flex-wrap gap-5 justify-between items-center">
          <Input placeholder="Search by title..." value={query} onChange={handleSearch} className="placeholder:text-gray-400" />
          <Button startIcon={<Add />} onClick={handleAdd}>
            Add
          </Button>
        </div>
        <ListMovies />
      </div>
    </MainLayout>
  );
};
