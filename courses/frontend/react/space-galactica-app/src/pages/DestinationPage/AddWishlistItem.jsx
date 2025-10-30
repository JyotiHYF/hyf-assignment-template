import { useState } from 'react';
import styles from './DestinationPage.module.css';

export const AddWishlistItem = ({
  onAddWishlistItem,
}) => {
  const [thumbnail, setThumbnail] = useState('/destination/image-europa.png');
  // Task - Week 3
  // 1. Add a useState for the handling the <input id="customWishlist" type="text" />
  // 2. Connect the setThumbnail to the <select>

  const onAddItemPressed = () => {
    // Task - Week 3
    // implement this function
    // Clear the <input/> field on button press
    // pass the thumbnail and the name from the input to the onAddWishlistItem function
    // call the onAddWishlistItem here
  }

  return (
    <div className={styles.addWishlistItem}>
      <p>Add custom planet to wishlist</p>
      <label htmlFor="customWishlist">Wishlist item name</label>
      <input id="customWishlist" type="text" />
      <label htmlFor="customWishlistThumbnail">Wishlist item thumbnail</label>
      <select id="customWishlistThumbnail" >
        <option value="/destination/image-europa.png">EUROPA</option>
        <option value="/destination/image-mars.png">MARS</option>
        <option value="/destination/image-moon.png">MOON</option>
        <option value="/destination/image-titan.png">TITAN</option>
      </select>
      <button>ADD CUSTOM</button>
    </div>
  );
};
