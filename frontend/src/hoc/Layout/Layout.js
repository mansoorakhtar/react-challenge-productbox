import React,{ Component, Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Layout.css';

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Navbar/>
                <main className="main">
                    {this.props.children}
                </main>
            </Fragment>
        );
    }
}

export default Layout;