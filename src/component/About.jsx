import React, {Component} from 'react';
import swal from 'sweetalert'
import {connect} from 'react-redux';

class About extends Component {
    render() {

        //destructuring arguments
        const {title} = this.props;
        return (
            <main>
                <h1>{title}</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <button className="btn btn-primary" onClick={() => {
                        swal("Here's the title!", "...and here's the text!");
                    }}>Learn more
                    </button>
                </p>
            </main>
        );
    }
}

const mapStateToProps = state => {
    return {
        title: state.aboutReducer.title
    };
};
export default connect(mapStateToProps)(About);