
interface IProps {
  message: string;
}

export const EmptyList = ({ message = "No records found" }: IProps) => {
  return <div className="text-center text-gray-500 mt-3">{message}</div>;
};
