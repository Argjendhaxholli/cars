import React from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../../actions';
import ItemDetails from './ItemDetails';

class ItemList extends React.Component {
    
    state = { cartItems: [] };

    addToCart = (e, item) => {
        e.preventDefault();
        this.setState(() => ({
            cartItems: [...this.state.cartItems, item],
        }));

        //save in localStorage
        localStorage.setItem('items', JSON.stringify(this.state.cartItems));
    }


    render() {

        const items = this.props.items.map((item) => {
            return <ItemDetails addToCart={this.addToCart} key={item.id} item={item} />
        });
        
        return (
            <div className="ui grid">
                <div className="sixteen wide column" >
                    <div className="ui segment">
                        <div className="ui inverted relaxed divided list">
                            {items}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        itemsList: Object.values(state.items),
        cartItems: null
    }
}

export default connect(mapStateToProps, { fetchItems })(ItemList);