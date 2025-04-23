import BACKGROUND from "../../../assets/images/header.webp";
import "../styles/header.css";

export const HeaderBg = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      <img src={BACKGROUND} alt="background-banner" className="w-full h-full object-cover scale-125 mas" />
      <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-brand-primary-violet to-transparent"></div>
    </div>
  );
};
