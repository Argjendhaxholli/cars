import React from 'react';

class ItemFatura extends React.Component {
    render() {
        // console.log(this.props.fatura);
        const { name, price } = this.props.fatura;
        // const {totali} = this.props.total;
        return (
                <tr>
                    <td>{name}</td>
                    <td>{price} Euro</td>
                    <td>{price}</td>
                </tr>
        )
    }
}

export default ItemFatura;