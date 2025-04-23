import "./style.css";

interface IProps {
  path?: string;
}

export const Cover = ({ path }: IProps) => {
  return (
    <div
      //
      className="w-56 m-auto relative wrapper-cover"
      style={path ? ({ "--bg-image": `url(${path})` } as React.CSSProperties) : {}}
    >
      <img src={path} alt="movie-cover" className="w-full" />
    </div>
  );
};
