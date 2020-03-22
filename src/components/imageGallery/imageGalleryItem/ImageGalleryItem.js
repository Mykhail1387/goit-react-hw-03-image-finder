import React from 'react';
import styles from './imageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ items }) => {
    const alt = "some image"
    return (
        <>
            {items.map(item => {
                return (<li key={item.id} className={styles.ImageGalleryItem}>
                    <img src={item.webformatURL} data-sourse={item.largeImageURL} alt={alt} className={styles.ImageGalleryItemImage} />
                </li>)
            })}
        </>
    )
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        webformatURL: PropTypes.string.isRequired
    }))
};