import React, { useEffect, useState } from "react";
import CartItem from "../../components/CartItem";
import HeroSingle from "../../components/HeroSingle";

const Cart = () => {
    return (
        <main>
            <HeroSingle />
            <div className="bg_color_1">
                <div className="container margin_60_35">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="box_cart">
                                <table className="table table-striped cart-list">
                                    <thead>
                                        <tr>
                                            <th>
                                                Item
                                            </th>
                                            <th>
                                                Discount
                                            </th>
                                            <th>
                                                Price
                                            </th>
                                            <th>
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <CartItem />
                                        <CartItem />
                                        <CartItem />
                                        <CartItem />
                                    </tbody>
                                </table>
                                <div className="cart-options clearfix">
                                    <div className="float-left">
                                        <div className="apply-coupon">
                                            <div className="form-group">
                                                <input type="text" name="coupon-code" defaultValue placeholder="Your Coupon Code" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <button type="button" className="btn_1 outline">Apply Coupon</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="float-right fix_mobile">
                                        <button type="button" className="btn_1 outline">Update Cart</button>
                                    </div>
                                </div>
                                {/* /cart-options */}
                            </div>
                        </div>
                        {/* /col */}
                        <aside className="col-lg-4" id="sidebar">
                            <div className="box_detail">
                                <div id="total_cart">
                                    Total <span className="float-right">69.00$</span>
                                </div>
                                <div className="add_bottom_30">Lorem ipsum dolor sit amet, sed vide <strong>moderatius</strong> ad. Ex eius soleat sanctus pro, enim conceptam in quo, <a href="#0">brute convenire</a> appellantur an mei.</div>
                                <a href="cart-2.html" className="btn_1 full-width">Checkout</a>
                                <a href="courses-grid-sidebar.html" className="btn_1 full-width outline"><i className="icon-right" /> Continue Shopping</a>
                            </div>
                        </aside>
                    </div>
                    {/* /row */}
                </div>
                {/* /container */}
            </div>
            {/* /bg_color_1 */}
        </main>

    );
};
export default Cart;