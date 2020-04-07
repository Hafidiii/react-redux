import React, {Component} from 'react';
import {Button} from "react-bootstrap";
import {connect} from "react-redux";
import * as homeActions from "../action/homeActions";

class Home extends Component {
    render() {
        const {title, setTitle} = this.props;
        return (
            <main>
                <h1>{title}</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Button onClick={setTitle} variant="primary">Change Title</Button>
                </p>
            </main>
        );
    }
}
const mapStateToProps = state => {
    return {
        title: state.homeReducer.title
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setTitle : () => dispatch(homeActions.setTitle())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);