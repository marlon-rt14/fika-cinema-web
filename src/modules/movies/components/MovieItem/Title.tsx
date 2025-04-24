interface Props {
  title: string;
}

export const Title = ({ title }: Props) => {
  return <h3 className="text-2xl text-wrap font-bold text-white text-shadow-black">{title}</h3>;
};
