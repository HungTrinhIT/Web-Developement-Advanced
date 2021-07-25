import react from 'react';

const CartItem = () => {
    return (
        <tr>
            <td>
                <div className="thumb_cart">
                    <img src="http://via.placeholder.com/150x150/ccc/fff/thumb_cart_1.jpg" alt="Image" />
                </div>
                <span className="item_cart">Persius delenit has cu</span>
            </td>
            <td>
                0%
            </td>
            <td>
                <strong>24,71$</strong>
            </td>
            <td className="options" style={{ width: '5%', textAlign: 'center' }}>
                <a href="#"><i className="icon-trash" /></a>
            </td>
        </tr>
    );
};
export default CartItem