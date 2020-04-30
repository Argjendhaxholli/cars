import React from 'react';
import { Field, reduxForm } from 'redux-form';

class ItemForm extends React.Component {

    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta }) => {
        // console.log(meta);
        //check if meta have error and is touched return class error or empty
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="name" component={this.renderInput} label="Shto kodin e pjeses" />
                <Field name="price" component={this.renderInput} label="Shto qmimin" />
                <Field name="count" component={this.renderInput} label="Shto sasin" />
                <button className="ui button primary">Shto pjesen e re</button>
            </form>
        );
    }
}

const validate = (formValues) => {
    //inicializimi i errors
    const errors = {};

    if (!formValues.name) {
        errors.name = 'Shto kodin e pjeses';
    }

    if (!formValues.price) {
        errors.price = 'Shto qmimin e pjeses';
    }

    if(!formValues.count) {
        errors.count = 'Shto sasin e pjeses';
    }

    return errors;
}

export default reduxForm({
    form: 'itemForm',
    validate
})(ItemForm);