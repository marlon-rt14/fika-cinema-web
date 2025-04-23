import { Input } from "../../../components/common";
import { ListCasts, MainLayout } from "../components";
import { useQuery } from "../hooks";

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
