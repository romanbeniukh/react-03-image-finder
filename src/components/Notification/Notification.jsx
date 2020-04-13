import React from 'react';
import T from 'prop-types';

const Notification = ({ message }) => (
  <div className="notification">
    <span className="notification__message">
      { message }
    </span>
  </div>
);

Notification.propTypes = {
  message: T.string.isRequired,
};

export default Notification;