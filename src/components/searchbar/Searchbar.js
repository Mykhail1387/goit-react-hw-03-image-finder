import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';
import apiPixabay from '../services/apiPixabay';

class Searchbar extends Component {

    state = {
        name: ''
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        apiPixabay.resetPage();

        this.props.onSubmit({ ...this.state });
        this.reset();
    }

    reset = () => {
        this.setState({
            name: ''
        })
    }

    render() {

        return (
            <>
                <header className={styles.Searchbar}>
                    <form onSubmit={this.handleSubmit} className={styles.SearchForm}>
                        <button type="submit" className={styles.SearchFormButton}>
                            <span className={styles.SearchFormButtonLabel}>Search</span>
                        </button>

                        <input
                            className={styles.SearchFormInput}
                            type="text"
                            name="name"
                            value={this.state.name}
                            autoComplete="off"
                            autoFocus
                            onChange={this.handleChange}
                            placeholder="Search images and photos"
                        />
                    </form>
                </header>
            </>
        )
    }

}

export default Searchbar;

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired
}