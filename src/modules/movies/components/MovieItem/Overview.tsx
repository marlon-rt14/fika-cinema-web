interface IProps {
  text: string;
}

export const Overview = ({ text }: IProps) => {
  return <p className="text-ellipsis line-clamp-4 text-white text-shadow-black text-sm">{text}</p>;
};
