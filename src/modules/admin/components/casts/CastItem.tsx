import { Cast } from "@/modules/shared/interfaces";

interface Props {
  cast: Cast;
}

export const CastItem = ({ cast }: Props) => {
  return (
    <div className="bg-gray-200 p-5 rounded-xl min-w-52">
      <h2>{cast.name}</h2>
    </div>
  );
};
