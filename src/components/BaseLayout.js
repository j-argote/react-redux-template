import React from 'react';

import Header from './Header';
import Footer from './Footer'

class BaseLayout extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                <Header />
                <br/>
                {this.props.children}
                <br/>
                <Footer />
            </div>
        );
    }
}


export default BaseLayout
