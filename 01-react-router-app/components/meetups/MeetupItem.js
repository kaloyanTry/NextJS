import { useContext } from 'react';

import Card from '../../ui/Card';
import classes from './MeetupItem.module.css';
import FavoritiesContext from '../../store/favorities-context';

function MeetupItem({ image, title, address, description, id }) {
  const favoritiesCtx = useContext(FavoritiesContext);

  const itemIsFavorite = favoritiesCtx.itemIsFavorite(id);

  function toggleFavoritiesStatusHandler() {
    if (itemIsFavorite) {
      favoritiesCtx.removeFavorite(id);
    } else {
      favoritiesCtx.addFavorite({
        id: id,
        title: title,
        description: description,
        image: image,
        address: address,
      });
    }
  }

  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>

          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoritiesStatusHandler}>
            {itemIsFavorite ? 'Remove from favorities' : 'Add to Favoritites'}
          </button>
        </div>
      </li>
    </Card>
  );
}

export default MeetupItem;
