import React from 'react';
// import _ from 'lodash';
import ItemFatura from '../items/ItemFatura';
class ItemsFatura extends React.Component {

    state = { sellItems: [], total: 0 }

    componentDidMount() {
        const sellItems = JSON.parse(localStorage.getItem('items', this.props.cartItems));
        this.setState(() => ({
            sellItems,
            total: sellItems.reduce((accummulator, item) => accummulator + item.price, 0)
        }));
    }


    render() {

        // console.log(sellItems);

        return (
            <table className="ui celled table">
                <thead>
                    <tr>
                        <th><h1>ZERO CARBON</h1></th>
                        <th>
                            <h1>Invoice</h1>
                            <p>3243</p>
                        </th>
                        <th style={{ 'borderLeft': 'none' }}>
                            <h3>Data</h3>
                            <p>15/12/2019</p>
                        </th>
                    </tr>
                    <tr>
                        <th>Pershkrimi - Kodi</th>
                        <th>Qmimi per cope</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.sellItems.map((item, i) => <ItemFatura key={i} fatura={item} />)}
                    {this.state.total}
                </tbody>
            </table>
        )
    }
}

export default ItemsFatura;