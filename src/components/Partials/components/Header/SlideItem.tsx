export const SlideItem = ({ path }: { path: string }) => {
  return (
    <div className="h-full w-full !rounded-2xl overflow-hidden">
      <img src={path} alt="banner-img" className="banner-img m-auto !rounded-2xl object-cover h-full" />
    </div>
  );
};
