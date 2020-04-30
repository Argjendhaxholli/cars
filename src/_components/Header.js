import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui pointing menu">
                <Link to="/" className="item">
                <i className="large search icon"></i>
                    Kerko
                </Link>
                <Link to="/items/new" className="item">
                <i className="large car icon"></i>
                    Regjistro pjese
                </Link>
            </div>
    );
}

export default Header;