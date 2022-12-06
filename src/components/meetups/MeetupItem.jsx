import React, { useContext } from "react";
import classes from "./MeetupItem.module.css";
import Card from "../UI/Card";
import FavoritesContext from "../../context/favorites-context";

function MeetupItem({ id, title, image, address, description }) {

  const favortietCtx = useContext(FavoritesContext)

  const itemIsFavorite = favortietCtx.itemIsFavorite(id)

  function toogleFavoritesButtonHandler() {
    if (itemIsFavorite) {
      favortietCtx.removeFavorite(id)
    } else {
      favortietCtx.addFavorite({
        id,
        title,
        description,
        image,
        address
      })
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toogleFavoritesButtonHandler}>{itemIsFavorite ? "Remove From Favorites" : "Add To Favorites"}</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
