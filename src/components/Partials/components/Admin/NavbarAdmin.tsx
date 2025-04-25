import { useState, useEffect } from "@core/base";
import { Bars, Logo } from "@/assets/icons";
import { CloseButton } from "@/components/Partials/components/Admin";
import { Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader } from "@heroui/drawer";
import { SidebarButtons } from "./SidebarButtons";
import { usePathname } from "@/hooks";
import { LogoutButton } from "@/components/ui";

export const NavbarAdmin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = usePathname();

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className=" mb-5">
      <div className="flex justify-between items-center md:justify-end">
        <button className="bg-gray-200 p-2 rounded-full cursor-pointer md:hidden" onClick={handleOpen}>
          <Bars className="size-6" />
        </button>
        <LogoutButton className="max-md:hidden" />
      </div>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onOpenChange={handleClose}
        hideCloseButton
        // backdrop="opaque"
        classNames={{
          // base: "data-[placement=right]:sm:m-2 data-[placement=left]:sm:m-2  rounded-medium rounded-2xl",
          // body: "border",
          base: "bg-gray-800/90 backdrop-blur-2xl w-xs rounded-r-2xl ",
          backdrop: "bg-brand-primary-blue/50 backdrop-blur-xs ",
        }}
      >
        <DrawerContent className="">
          {() => (
            <div className="h-full p-5 ">
              <DrawerHeader className="flex justify-end text-white ">
                <CloseButton onClose={handleClose} />
              </DrawerHeader>
              <DrawerBody className="gap-10 mt-[50%]">
                <SidebarButtons />
              </DrawerBody>
              <DrawerFooter className="mt-[55%] flex flex-col gap-10">
                <div className="m-auto scale-150">
                  <Logo />
                </div>
                <div className="m-auto">
                  <LogoutButton />
                </div>
              </DrawerFooter>
            </div>
          )}
        </DrawerContent>
      </Drawer>
    </nav>
  );
};
