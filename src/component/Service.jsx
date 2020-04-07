import React, {Component} from 'react';
import {Button} from "react-bootstrap";
import {connect} from 'react-redux';

class Service extends Component {
    render() {

        const {title} = this.props;
        return (
            <main>
                <h1>{title}</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </main>);
    }
}

const mapStateToProps = state => {
    return {
        title: state.serviceReducer.title
    };
};

export default connect(mapStateToProps)(Service);