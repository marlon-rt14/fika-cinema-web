import { Star } from "../../../../assets/icons";

interface IProps {
  rate: number;
}

export const Rate = ({ rate }: IProps) => {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div>
      <div className="m-auto flex justify-center">
        {stars.map((star) => (
          <Star key={star} className={`size-5 cursor-pointer hover:scale-[1.2] transition-all ${star <= rate ? "fill-yellow-400" : "fill-gray-400"}`} />
        ))}
      </div>
    </div>
  );
};
