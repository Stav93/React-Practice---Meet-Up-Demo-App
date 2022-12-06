import { useContext } from "react";
import FavoritesContext from "../context/favorites-context"
import MeetupList from "../components/meetups/MeetupList"

function FavoritesPage() {
  const favortietCtx = useContext(FavoritesContext)

  let content;

  if (favortietCtx.totalFavorites === 0) {
    content = <p>No Favorites Yet</p>
  } else {
    content = <MeetupList meetups={favortietCtx.favorites} />
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  )
}

export default FavoritesPage;