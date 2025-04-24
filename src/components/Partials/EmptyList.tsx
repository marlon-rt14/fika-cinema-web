interface Props {
  message: string;
}

export const EmptyList = ({ message = "No records found" }: Props) => {
  return <div className="text-center text-gray-500 mt-3">{message}</div>;
};
