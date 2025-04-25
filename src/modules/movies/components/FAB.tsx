import { SigninButton } from "@/components";

export const FAB = () => {
  return (
    <div className="fixed h-screen w-full z-20 top-0 left-0 pointer-events-none sm:hidden">
      <div className="inline-block absolute bottom-5 right-8 scale-125 pointer-events-auto shadow-2xl shadow-white">
        <SigninButton />
      </div>
    </div>
  );
};
