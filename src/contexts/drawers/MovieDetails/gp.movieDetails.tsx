import { Movie } from "@/modules/shared/interfaces";
import { useCallback, useState } from "@/core/base";
import { Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader } from "@heroui/drawer";
import { GC_MovieDetails, CloseButton, Cover, Rate } from "@contexts/drawers/MovieDetails";
import { Button } from "@components";
import { Genres } from "@modules/movies/components";

interface IGlobalProps {
  children: React.ReactNode;
}

export const MovieDetailsProvider = ({ children }: IGlobalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [movie, setMovie] = useState<Movie | null>(null);

  const handleOpen = useCallback((movie: Movie) => {
    setIsOpen(true);
    setMovie(movie);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setMovie(null);
  };

  return (
    <GC_MovieDetails.Provider value={{ movie, onOpen: handleOpen, setMovie }}>
      <Drawer
        isOpen={isOpen}
        onOpenChange={handleClose}
        hideCloseButton
        // backdrop="opaque"
        classNames={{
          // base: "data-[placement=right]:sm:m-2 data-[placement=left]:sm:m-2  rounded-medium rounded-2xl",
          // body: "border",
          base: "bg-gray-800/90 backdrop-blur-2xl rounded-l-2xl ",
          backdrop: "bg-brand-primary-blue/50 backdrop-blur-xs rounded-2xl ",
        }}
      >
        <DrawerContent className="">
          {() => (
            <div className="h-full p-5 ">
              <DrawerHeader className="flex flex-col gap-1 text-3xl font-bold text-white mb-2">
                <CloseButton onClose={handleClose} />
                {/* <hr className="my-2 mt-3 text-gray-300" /> */}
                {movie?.title}
              </DrawerHeader>
              <DrawerBody className="gap-10">
                <Genres genres={movie?.genres ?? []} />
                <div className="flex flex-col gap-5">
                  <p className="text-white">{movie?.overview}</p>
                  <small className="text-gray-300">Cast & Crew: {movie?.cast?.map((el) => el.name).join(", ")}</small>
                </div>
                <Cover path={movie?.poster_path} />
                <Rate rate={movie?.rate ?? 0} movieId={movie?.id ?? 0} />
              </DrawerBody>
              <DrawerFooter className="">
                <div className="py-5 bottom-10">
                  <Button className="bg-comp-red" onClick={handleClose}>
                    Close
                  </Button>
                </div>
              </DrawerFooter>
            </div>
          )}
        </DrawerContent>
      </Drawer>
      {children}
    </GC_MovieDetails.Provider>
  );
};
