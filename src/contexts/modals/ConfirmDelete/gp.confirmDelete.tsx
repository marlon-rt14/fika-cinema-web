import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { ReactNode, useState } from "react";
import { Button } from "../../../components/common";
import { GC_ConfirmDelete } from "./gc.confirmDelete";

interface IGlobalProps {
  children: ReactNode;
}

const INIT_MESSAGE = "Are you sure you want to delete this?";

export const ConfirmDeleteProvider = ({ children }: IGlobalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState<string | undefined>();
  const [confirmCallback, setConfirmCallback] = useState<(() => void) | null>(null);

  const handleOpen = (message?: string, onConfirm?: () => void) => {
    setIsOpen(true);
    setMessage(message ?? INIT_MESSAGE);
    if (onConfirm) {
      setConfirmCallback(() => onConfirm);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setMessage(undefined);
    setConfirmCallback(null);
  };

  const handleConfirm = () => {
    if (confirmCallback) {
      confirmCallback();
    }
    handleClose();
  };

  return (
    <GC_ConfirmDelete.Provider value={{ message, onOpen: handleOpen }}>
      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none " onClose={handleClose}>
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 !relative shadow-2xl "
            >
              <DialogTitle as="h4" className="text-2xl font-bold text-white mb-3">
                {message}
              </DialogTitle>
              <div className="mt-4 flex gap-5 justify-end">
                <Button className="bg-brand-primary-blue" onClick={handleClose}>
                  Cancel
                </Button>
                <Button className="bg-semantic-error" onClick={handleConfirm}>
                  Delete
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
      {children}
    </GC_ConfirmDelete.Provider>
  );
};
