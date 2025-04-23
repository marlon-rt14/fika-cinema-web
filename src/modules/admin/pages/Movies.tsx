import { Add } from "../../../assets/icons";
import { Button, Input } from "../../../components/common";
import { useGlobalCreateMovie } from "../../../contexts/modals";
import { ListMovies, MainLayout } from "../components";
import { useQuery } from "../hooks";

export const Movies = () => {
  const { onOpen } = useGlobalCreateMovie();

  const { query, handleSearch } = useQuery("");

  const handleAdd = () => {
    onOpen();
  };

  return (
    <MainLayout title="Movies">
      <div className="flex justify-between items-center">
        <Input placeholder="Search by title..." value={query} onChange={handleSearch} className="placeholder:text-gray-400" />
        <Button startIcon={<Add />} onClick={handleAdd}>
          Add
        </Button>
      </div>
      <ListMovies />
    </MainLayout>
  );
};
