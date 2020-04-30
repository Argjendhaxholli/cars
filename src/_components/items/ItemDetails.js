import React from 'react';

class ItemDetails extends React.Component {

    renderStock = () => {
        const { count } = this.props.item;
        if(count === 0) {
            return (
                <div className="ui inverted red button">
                    Pjesa e padisponueshme ne stok
                </div> 
            )
        } else {
            return (
                <div className="ui inverted green button">
                    Pjesa e disponueshme ne stok
                </div> 
            )
        }
    }

    render() {
        // console.log(this.props.item);
        const { name, price, count } = this.props.item;
        return (
            <div className="ui divided items">
                <div className="item border-grey">
                    <div className="image" style={{ 'textAlign': 'center' }}>
                        <i className="massive car icon"></i>
                    </div>
                    <div className="content">
                        <h2 className="header">{name}</h2>
                        <div className="meta">
                            <span className="cinema">
                                <div className="extra">
                                    <div className="ui label">Qmimi per cope:</div>  <div className="ui label"> {price} Euro</div>
                                </div>
                            </span>
                        </div>

                        <div className="extra">
                            <div className="ui label">Sasia</div>
                            <div className="ui label"> {count}</div> {this.renderStock()}
                            
                            <button onClick={(e) => this.props.addToCart(e, this.props.item)} className="ui inverted green button" style={{ 'float': 'right' }}><i className="shopping cart icon"></i> Shto pjesen</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemDetails;