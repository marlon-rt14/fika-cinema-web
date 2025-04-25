import { Button } from "@heroui/button";
import { Tooltip } from "@heroui/tooltip";

interface Props {
  onClose: () => void;
}

export const CloseButton = ({ onClose }: Props) => {
  return (
    <div className="mb-2 rotate-180">
      <Tooltip content="Close" className="text-white bg-comp-red rounded-2xl relative">
        <Button isIconOnly className="text-default-400 border p-2 rounded-lg border-gray-300 cursor-pointer" size="sm" variant="light" onPress={onClose}>
          <svg
            fill="none"
            height="20"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m13 17 5-5-5-5M6 17l5-5-5-5" />
          </svg>
        </Button>
      </Tooltip>
    </div>
  );
};
