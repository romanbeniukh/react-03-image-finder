import React, {Component, createRef} from 'react';
import T from 'prop-types';

class Modal extends Component {
  static propTypes = {
    bigPicture: T.string.isRequired,
    closeModal: T.func.isRequired,
  };

  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeypress)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeypress)
  }

  handleKeypress = (e) => {
    if (e.code !== 'Escape') return;

    this.props.closeModal();
  };

  handleBackdropClick = ( e ) => {
    const { current } = this.backdropRef;

    if (current && e.target !== current) {
      return;
    }

    this.props.closeModal();
  };

  render() {
    return (
      <div className="overlay" ref={ this.backdropRef } onClick={ this.handleBackdropClick }>
        <div className="modal">
          <img className="modal__img"
               src={ this.props.bigPicture }
               alt="bigPicture" />
        </div>
      </div>
    )
  }
}

export default Modal;