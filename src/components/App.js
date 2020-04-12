import React, { Component } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'
import apiService from '../services/apiService';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import LoadMore from './LoarMore/LoadMore';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    pictures: [],
    bigPicture: '',
    query: '',
    page: 1,
    isLoading: false,
    isModal: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
      this.setState({ isLoading: true });

      apiService
        .fetchPicturesWithQuery(this.state.query, this.state.page)
        .then(picture => {
          this.setState(state => ({
            pictures: state.pictures.concat(picture)
          }));
          this.scrollToTarget(picture[0].id)
        })
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ isLoading: false }));
    }
  };

  updateState = ( state, value ) => {
    this.setState({
      [state]: value
    })
  };

  updateQuery = ( value ) => {
    value !== this.state.query && this.resetBeforeNewQuery();
    this.updateState('query', value);
  };

  loadMorePictures = ( value ) => {
    value++;
    this.updateState('page', value);
  };

  resetBeforeNewQuery = () => {
    this.updateState('page', 1);
    this.updateState('pictures', []);
  };

  scrollToTarget = ( id ) => {
    const target = document.getElementById(id).getBoundingClientRect().top + window.scrollY - 80;

    window.scrollTo({
      top: target,
      behavior: 'smooth',
    });
  };

  getBigPicture = ( e ) => {
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
    return (
      <div className="page-container">
        <SearchBar updateQuery={ this.updateQuery }/>
        {this.state.error && (
          <p>Whoops, something went wrong: {this.state.error.message}</p>
        )}
        {this.state.pictures.length > 0 && (
          <ImageGallery pictures={ this.state.pictures } getBigPicture={ this.getBigPicture }/>
        )}
        {this.state.isLoading && (
          <Loader className="loader" type="ThreeDots" color="#e4e4e4" height={80} width={80} />
        )}
        {this.state.pictures.length >= 12 && (
          <LoadMore page={this.state.page} loadMorePictures={ this.loadMorePictures }/>
        )}
        {this.state.isModal && (
          <Modal bigPicture={ this.state.bigPicture } closeModal={ this.closeModal }/>
        )}
      </div>
    )
  }
}

export default App;