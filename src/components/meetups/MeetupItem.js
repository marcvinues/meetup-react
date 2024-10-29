import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

import { useFavorites } from "../../context/FavoritesContext";

export default function MeetupItem({ item }) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const itemIsFavorite = isFavorite(item.id);

  const toggleFavorites = () => {
    if (itemIsFavorite) {
      removeFavorite(item.id);
    } else {
      addFavorite(item);
    }
  };

  return (
    <li className={classes.item} data-test="meet-up-item">
      <Card>
        <div className={classes.image}>
          <img src={item.image} alt={item.title} />
        </div>
        <div className={classes.content}>
          <h3>{item.title}</h3>
          <address>{item.address}</address>
          <p>{item.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavorites}>
            {itemIsFavorite ? "Remove from favorites" : "Add to favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}
