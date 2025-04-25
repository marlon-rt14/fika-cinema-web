import { Button } from "@/components/common";
import { useNavigate } from "@core/routing";

type Props = React.HTMLAttributes<HTMLButtonElement>;

export const SigninButton = ({ className }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/admin/");
  };

  return (
    <Button className={`bg-comp-green ${className}`} onClick={handleClick}>
      Sign in
    </Button>
  );
};
