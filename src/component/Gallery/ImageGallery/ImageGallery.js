import React from "react";
import "../../Styles/styls.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Modal from "../Modal/Modal";
const ImageGallery = ({
  images,
  openModal,
  isModalOpen,
  id,
  object,
  handleKeyPress,
  handleBackdropClick
}) => {
  return (
    <>
      {isModalOpen && (
        <Modal
          id={id}
          object={object}
          handleKeyPress={handleKeyPress}
          handleBackdropClick={handleBackdropClick}
        />
      )}
      <ul className="ImageGallery">
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
