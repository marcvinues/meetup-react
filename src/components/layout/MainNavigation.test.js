import { mount } from "enzyme";
import MainNavigation from "./MainNavigation";
import { FavoritesProvider } from "../../context/FavoritesContext";

import { MemoryRouter } from "react-router-dom";

test("Links are render correctly with their paths", () => {
  const wrapper = mount(
    <FavoritesProvider>
      <MemoryRouter>
        <MainNavigation />
      </MemoryRouter>
    </FavoritesProvider>
  );

  const links = wrapper.find("Link");
  expect(links.at(0).prop("to")).toBe("/");
  expect(links.at(1).prop("to")).toBe("/new-meetup");
  expect(links.at(2).prop("to")).toBe("/favorites");
});
