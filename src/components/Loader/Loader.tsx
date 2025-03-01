import React, { ReactElement } from 'react';
import './style.scss';

const Loader = () : ReactElement => {
    return (
        <div className="loader">
            <div className="loader-circle"></div>
        </div>
    );
};

export default Loader;