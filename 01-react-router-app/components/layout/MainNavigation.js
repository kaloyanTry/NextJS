import { useContext } from 'react';
import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import FavoritiesContext from '../../store/favorities-context';

function MainNavigation() {
  const favoritiesCtx = useContext(FavoritiesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Logo Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Meetups</Link>
          </li>
          <li>
            <Link to='/new-meetup'>Add New Meetup</Link>
          </li>
          <li>
            <Link to='/favorities'>
              Favorities
              <span className={classes.badge}>
                {favoritiesCtx.totalFavorities}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
