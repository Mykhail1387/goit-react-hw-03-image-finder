import React from 'react';
import styles from './ImageGallery.module.css';
import ImageGalleryItem from './imageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types'

const ImageGallery = ({ items }) => {
    return (
        <>
            <ul className={styles.ImageGallery}>
                <ImageGalleryItem items={items} />
            </ul>
        </>
    )

}

export default ImageGallery;

ImageGallery.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        webformatURL: PropTypes.string.isRequired
    }))
};