import React from 'react';
import { connect } from 'react-redux';
import { createItem } from '../../_actions';
import ItemForm from './ItemForm';
import Header from '../../Header';

class ItemCreate extends React.Component {

    onSubmit = (formValue) => {
        this.props.createItem(formValue);
    }

    render() {
        
        return (
            <div>
                <Header />
                <div className="ui container">
                    <h3>Shto pjesen</h3>
                    <ItemForm onSubmit={this.onSubmit} />
                </div>
            </div>
        );
    }
}

export default connect(null, { createItem })(ItemCreate);