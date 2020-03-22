import React from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onLoadMore }) => <button onClick={onLoadMore} type="button" className={styles.Button}>Load more</button>

export default Button;

Button.propTypes = {
    onLoadMore: PropTypes.func.isRequired
}