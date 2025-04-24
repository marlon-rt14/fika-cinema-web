interface Props {
  text: string;
}

export const Overview = ({ text }: Props) => {
  return <p className="text-ellipsis line-clamp-4 text-white text-shadow-black text-sm">{text}</p>;
};
