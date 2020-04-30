import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchItem, editItem } from '../../actions';
import ItemForm from './ItemForm';

class ItemEdit extends React.Component {

    componentDidCatch() {
        this.props.fetchItem(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        this.props.editItem(this.props.match.params.id, formValues);
    }

    render() {
        if (!this.props.item) {
            return <div>Ne kerkim...</div>
        }
        return (
            <div>
                <h3>Ndrysho pjesen</h3>
                <ItemForm
                    initialValues={_.pick(this.props.item, 'title', 'price')}
                    onSubmit={this.onSubmit} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { item: state.items[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchItem, editItem })(ItemEdit);