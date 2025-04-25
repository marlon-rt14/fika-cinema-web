import { ButtonItem, ButtonLink } from "@components/Partials/components/Admin";

export const SidebarButtons = () => {
  return (
    <ul className=" w-full flex flex-col gap-5">
      <ButtonItem>
        <ButtonLink to="/admin/movies">Movies</ButtonLink>
      </ButtonItem>
      <ButtonItem>
        <ButtonLink to="/admin/genres">Genres</ButtonLink>
      </ButtonItem>
      <ButtonItem>
        <ButtonLink to="/admin/cast">Cast & Crew</ButtonLink>
      </ButtonItem>
    </ul>
  );
};
