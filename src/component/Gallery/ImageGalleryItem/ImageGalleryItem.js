import React from "react";
import css from "../../Styles/styls.css";
const ImageGalleryItem = ({ src, id, openModal }) => (
  <li className={css.ImageGalleryItem}>
    <img
      onClick={openModal}
      src={src}
      id={id}
      alt="der"
      className={css.ImageGalleryItemImage}
    />
  </li>
);

export default ImageGalleryItem;
