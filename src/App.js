import React, {Component, Fragment} from 'react';
import Routes from './Routes';
import {NotificationContainer} from 'react-notifications';
import { loadFromLocalStorage } from './store/localStorage';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import './App.css';
import { fetchUserInfo } from './store/actions/userActions';

class App extends Component {

    async componentDidMount() {
        const { userMe }  = this.props;
        const token = loadFromLocalStorage();
        if (token) {
            await userMe(token);
        }
    }

    render() {
        return (
            <Fragment>
                <NotificationContainer/>
                <Routes user={this.props.user}/>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    user: state.users.user,
});

const mapDispatchToProps = dispatch => ({
    userMe: (token) => dispatch(fetchUserInfo(token)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));


