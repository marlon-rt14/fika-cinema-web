import { Input } from "@components";
import { ListCasts, MainLayout } from "@admin/components";
import { useQuery } from "@/modules/shared/hooks";

export const Cast = () => {
  const { query, handleSearch } = useQuery("");
  return (
    <MainLayout title="Cast & Crew">
      <div className="flex justify-between items-center">
        <Input placeholder="Search..." value={query} onChange={handleSearch} className="placeholder:text-gray-400" />
        {/* <Button startIcon={<Add />} onClick={handleAdd}>
              Add
            </Button> */}
      </div>
      <ListCasts />
    </MainLayout>
  );
};
