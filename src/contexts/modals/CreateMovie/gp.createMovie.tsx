import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { ReactNode, useState } from "react";
import { CustomForm } from "../../../components/forms/CustomForm/CustomForm";
import { GlobalContext } from "./gc.createMovie";
import { IMovie } from "../../../modules/movies/entities";

interface IGlobalProps {
  children: ReactNode;
}

export interface ValueType extends Omit<IMovie, "id"> {
  id?: number;
}

const INIT_VALUE: ValueType = {
  title: "",
  overview: "",
  poster_path: "",
  rate: 0,
  release_date: "2023-01-01",
  genres: [],
  cast: [],
};

export const CreateMovieProvider = ({ children }: IGlobalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState<ValueType | undefined>(INIT_VALUE);

  const handleOpen = (movie?: IMovie) => {
    setIsOpen(true);
    if (movie) setValue(movie);
    else setValue(INIT_VALUE);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <GlobalContext.Provider value={{ value, setValue, onOpen: handleOpen, onClose: handleClose }}>
      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none " onClose={close}>
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 !relative shadow-2xl "
            >
              <DialogTitle as="h1" className="text-2xl font-bold text-white mb-3 text-center">
                {value?.id ? "Update movie" : "Create movie"}
              </DialogTitle>
              <div>
                <CustomForm movie={value} />
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
      {children}
    </GlobalContext.Provider>
  );
};
