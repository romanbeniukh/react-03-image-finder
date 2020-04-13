import React from 'react';

const Notification = ({ message }) => (
  <div className="notification">
    <span className="notification__message">
      { message }
    </span>
  </div>
);

export default Notification;