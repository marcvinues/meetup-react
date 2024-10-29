/* eslint-disable testing-library/no-debugging-utils */
import { mount } from "enzyme";
import MeetupItem from "./MeetupItem";

import { FavoritesProvider } from "../../context/FavoritesContext";

test("<MeetupItem/> renders without crashing", () => {
  const data = {
    id: "1",
    title: "Test Meetup",
    description: "Test Description",
  };
  const wrapper = mount(
    <FavoritesProvider>
      <MeetupItem item={data} />
    </FavoritesProvider>
  );
  expect(wrapper.exists()).toBe(true);
});
