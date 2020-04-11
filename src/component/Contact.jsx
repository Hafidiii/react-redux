import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from "react-redux";
import {} from 'react-router-dom';
import * as loadAction from '../reducers/contactReducer';
import swal from 'sweetalert';

const validate = values => {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = 'Required'
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.lastName) {
        errors.lastName = 'Required';
    }

    return errors;
};

const warn = value => {
    const warning = {};
    if (value.firstName === 'Hafid') {
        warning.firstName = 'You have to change your name';
    }
    return warning;
};

const data = {
    firstName: 'Hafid',
    lastName: 'sss',
    email: 'jack.better@gamil.com'
};

const renderField = ({
                         input,
                         label,
                         type,
                         className,
                         meta: {touched, error, warning}
                     }) => (
    <div>
        <input {...input} className={className} placeholder={label} type={type}/>
        {touched &&
        ((error && <p className="text-left" style={{color: "red"}}>{error}</p>) ||
            (warning && <p className="text-left" style={{color: "orange"}}>{warning}</p>))}
    </div>
);

const onSubmit = (value, props) => {
    props.history.push('/about');
};

class Contact extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        const {handleSubmit, submitting, valid, pristine, load, initialize} = this.props;
        return (
            <React.Fragment>
                <main>
                    <h1>Contact</h1>
                    <button onClick={() => load(data)} className='btn btn-block btn-warning '>Load user</button>
                </main>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <Field className='form-control' label="First Name" name="firstName" component={renderField}
                           type="text"/><br/>
                    <Field className='form-control' label="Last Name" name="lastName" component={renderField}
                           type="text"/><br/>
                    <Field className='form-control' label="Email" name="email" component={renderField}
                           type="email"/><br/>

                    <button className='btn  btn-success m-2' disabled={!valid} type="submit"
                            onClick={e => onSubmit(e, this.props)}>Submit
                    </button>
                    {/*<button className='btn btn-danger m-2' disabled={pristine || submitting} onClick={reset}*/}
                    {/*        type="button">Reset*/}
                    {/*</button>*/}
                    <button className='btn  btn-secondary' disabled={pristine || submitting} onClick={initialize}
                            type="button">Initialize
                    </button>
                </form>
            </React.Fragment>
        );
    }
};

const mapStateToProps = state => {
    return {
        initialValues: state.contactReducer.data
    };
};

const mapDispatchToProps = {load: loadAction.load};

export default connect(mapStateToProps, mapDispatchToProps)
(reduxForm({
    form: 'contact',
    validate,
    warn,
    onSubmit
    // initialValues: {
    //     firstName: 'Hafid',
    //     lastName: 'Ait oubouhou',
    //     email: 'aitoubouhouhafid@gmail.com'
    // }
})(Contact));