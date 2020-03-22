import React, { Component } from 'react';
import Searchbar from './searchbar/Searchbar';
import ImageGallery from './imageGallery/ImageGallery';
import Loadder from './loader/Loader';
import Button from './button/Button';
import apiPixabay from './services/apiPixabay';
import Modal from './modal/Modal';
import './App.module.css';


export default class App extends Component {

    state = {
        images: [],
        isLoading: false,
        isModalOpen: false,
        query: '',
        imageOnModal: '',
        error: null,
    }

    onSubmit = ({ name }) => {
        this.setState({
            query: name
        })
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevState.query !== this.state.query) {
            this.setState({ isLoading: true });
            const query = this.state.query

            apiPixabay
                .fetchImages(query)
                .then((hits) => {
                    this.setState({ images: hits })
                })
                .catch(error => this.setState({ error }))
                .finally(() => this.setState({ isLoading: false }));
        }
    }

    buttonLoadMore = () => {
        apiPixabay
            .fetchImages(this.state.query)
            .then((hits) => {
                this.setState(state => ({ images: [...state.images, ...hits] }))
                window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: 'smooth',
                });
            })
            .catch(error => console.log(error))
    }

    componentDidMount() {
        window.addEventListener('click', this.openModalAndGiveBigImage);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.openModalAndGiveBigImage);
    }

    openModalAndGiveBigImage = (e) => {
        if (e.target.nodeName === "IMG") {
            this.setState({ isModalOpen: true })

            const imageBig = e.target.getAttribute('data-sourse');
            this.setState({ imageOnModal: imageBig })
        }
    }

    closeModal = () => this.setState({ isModalOpen: false });


    render() {
        const { images, isLoading, isModalOpen, imageOnModal, error } = this.state;

        const styleForError = { color: 'red', textAlign: 'center' };

        return (
            <>
                <Searchbar onSubmit={this.onSubmit} />
                {error && <h2 style={styleForError}>Whoops, something went wrong: {error.message}, try again later...</h2>}
                {isLoading ? <Loadder /> : <ImageGallery items={images} />}
                {images.length > 0 && <Button onLoadMore={this.buttonLoadMore} />}
                {isModalOpen && <Modal onClose={this.closeModal}>
                    {<img src={imageOnModal} data-sourse={imageOnModal} alt="some alt" />}
                </Modal>}
            </>
        )
    }

}