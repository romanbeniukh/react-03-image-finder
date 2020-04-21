import React, { Component } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import apiService from '../services/apiService';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    pictures: [],
    bigPicture: '',
    query: '',
    page: 1,
    isEmpty: false,
    isLoading: false,
    isModal: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      this.setState({
        isLoading: true,
        isEmpty: false,
        error: null,
      });

      apiService
        .fetchPicturesWithQuery(query, page)
        .then(picture => {
          this.setState(state => ({
            pictures: state.pictures.concat(picture),
          }));
          !picture.length && this.updateState(`isEmpty`, true);
          picture.length && this.scrollToTarget(picture[0].id);
        })
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  updateState = (state, value) => {
    this.setState({
      [state]: value,
    });
  };

  updateQuery = value => {
    value !== this.state.query && this.resetBeforeNewQuery();
    this.updateState('query', value);
  };

  loadMorePictures = value => {
    value++;
    this.updateState('page', value);
  };

  resetBeforeNewQuery = () => {
    this.updateState('page', 1);
    this.updateState('pictures', []);
  };

  scrollToTarget = id => {
    const target = document.getElementById(id).getBoundingClientRect().top + window.scrollY - 80;

    window.scrollTo({
      top: target,
      behavior: 'smooth',
    });
  };

  getBigPicture = e => {
    this.updateState('bigPicture', e.target.dataset.src);
    this.openModal();
  };

  openModal = () => {
    this.updateState('isModal', true);
  };

  closeModal = () => {
    this.updateState('isModal', false);
    this.updateState('bigPicture', '');
  };

  render() {
    const { pictures, bigPicture, page, error, isModal, isLoading, isEmpty } = this.state;
    return (
      <div className="page-container">
        <SearchBar updateQuery={this.updateQuery} />
        {error && <Notification message={`Что то пошло не так: ${error.message}`} />}
        {isEmpty && <Notification message="По вашему запросу ничего нет :(" />}
        {pictures.length > 0 && <ImageGallery pictures={pictures} getBigPicture={this.getBigPicture} />}
        {isLoading && <Loader className="loader" type="ThreeDots" color="#e4e4e4" height={80} width={80} />}
        {pictures.length >= 12 && <Button title="Больше" page={page} handler={this.loadMorePictures} />}
        {isModal && <Modal bigPicture={bigPicture} closeModal={this.closeModal} />}
      </div>
    );
  }
}

export default App;
