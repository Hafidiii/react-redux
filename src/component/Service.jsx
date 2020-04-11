import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from "redux-form";

const onSubmit = value => {
    console.log(value);
};


class Service extends Component {


    render() {

        const {title, handleSubmit, valid} = this.props;
        return (
            <main>
                <h1>{title}</h1>
                <br/>
                <form onSubmit={handleSubmit} className="form">

                    <Field className="input" name="login" component="input" type="text"
                           placeholder="Login..."/>
                    <br/>
                    <br/>
                    <Field className="input" name="password" component="input" type="password"
                           placeholder="Mot de passe..." />
                    <br/>
                    <br/>
                    <button disabled={!valid} className="btn btn-primary btn-block">Submit</button>


                </form>
            </main>);
    }
}

const mapStateToProps = state => {
    return {
        title: state.serviceReducer.title
    };
};

Service = reduxForm({
    form: 'signIn',
    onSubmit
})(Service);
export default connect(mapStateToProps)(Service);
