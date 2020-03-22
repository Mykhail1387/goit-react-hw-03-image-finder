import React, { Component, createRef } from 'react';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';

export default class Modal extends Component {
    backdropRef = createRef();

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyPress);
    }


    handleKeyPress = e => {
        if (e.code !== 'Escape') return;

        this.props.onClose()
    }

    handleBackdropClick = e => {
        const { current } = this.backdropRef;

        if (current && e.target !== current) return;

        this.props.onClose()
    }

    render() {
        const { children } = this.props;
        return (
            <div
                className={styles.Overlay}
                ref={this.backdropRef}
                onClick={this.handleBackdropClick} >
                <div className={styles.Modal}>
                    {children}
                </div>
            </div>
        )
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.object.isRequired
}