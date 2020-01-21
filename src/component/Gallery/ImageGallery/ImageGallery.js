import React from "react";
import css from "../../Styles/styls.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Modal from "../Modal/Modal";
const ImageGallery = ({ images, openModal, isModalOpen, id, object }) => {
  return (
    <>
      {isModalOpen && <Modal id={id} object={object} />}
      <ul className={css.ImageGallery}>
        {images.map(item => (
          <ImageGalleryItem
            key={item.id}
            src={item.webformatURL}
            id={item.id}
            openModal={openModal}
          />
        ))}
      </ul>
    </>
  );
};

export default ImageGallery;
