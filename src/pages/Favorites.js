import { useFavorites } from "../context/FavoritesContext";
import MeetupItem from "../components/meetups/MeetupItem";
import classes from "../components/meetups/MeetupList.module.css";

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  return (
    <section>
      <h1>Favorites Page</h1>
      <ul className={classes.list}>
        {favorites.map((item) => (
          <MeetupItem item={item} key={item.id} />
        ))}
      </ul>
    </section>
  );
}
