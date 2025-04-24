interface Props {
  message?: string;
}

export const LoadingLazyComponent = ({ message = "Loading..." }: Props) => {
  return (
    <div className="text-center">
      <p className="text-gray-300">{message}</p>
    </div>
  );
};
