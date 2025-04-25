import { Logout } from "@/assets/icons/Logout";
import { Button } from "@/components/common";
import { useNavigate } from "@core/routing";

type Props = React.HTMLAttributes<HTMLButtonElement>;

export const LogoutButton = ({ className }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <Button className={`bg-comp-red text-center ${className}`} onClick={handleClick} startIcon={<Logout />}>
      Log out
    </Button>
  );
};
