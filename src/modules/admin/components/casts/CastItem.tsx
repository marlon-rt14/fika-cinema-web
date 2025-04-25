import { Cast } from "@/modules/shared/interfaces";

interface Props {
  cast: Cast;
}

export const CastItem = ({ cast }: Props) => {
  return (
    <div className="bg-gray-200 p-5 rounded-xl min-w-52 flex-1">
      <h2 className="text-center">{cast.name}</h2>
    </div>
  );
};
