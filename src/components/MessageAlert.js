import React from 'react';

const MessageAlert = ({ message, type }) => {
    return (
        <div className={`alert alert-${type}`} role="alert">
            {message}
        </div>
    );
};

export default MessageAlert;