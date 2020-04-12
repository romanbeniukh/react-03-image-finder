import React from 'react';
import T from 'prop-types';

const LoadMore = ({ page, loadMorePictures }) => (
  <div className="load-more" >
    <button className="load-more__btn" onClick={ () => loadMorePictures(page) }>load</button>
  </div>
);

LoadMore.propTypes = {
  page: T.number.isRequired,
  loadMorePictures: T.func.isRequired,
};

export default LoadMore;