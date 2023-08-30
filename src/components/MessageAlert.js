// message alert component, currently no function but skeleton added incase I think of an alert later.

import React from 'react';

const MessageAlert = ({ message, type }) => {
    return (
        <div className={`alert alert-${type}`} role="alert">
            {message}
        </div>
    );
};

export default MessageAlert;