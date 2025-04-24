import { ButtonItem, ButtonLink } from "@components";

export const SidebarAdmin = () => {
  return (
    <aside className="w-52 bg-gray-200 flex items-center">
      <ul className=" w-full flex flex-col gap-5 ">
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
    </aside>
  );
};
