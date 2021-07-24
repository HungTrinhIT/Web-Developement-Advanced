import React from 'react';

const CourseReviews = () => {
    return (
        <section id="reviews">
            <h2>Reviews</h2>
            <div className="reviews-container">
                <div className="row">
                    <div className="col-lg-3">
                        <div id="review_summary">
                            <strong>4.7</strong>
                            <div className="rating">
                                <i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star" />
                            </div>
                            <small>Based on 4 reviews</small>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="row">
                            <div className="col-lg-10 col-9">
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                            </div>
                            <div className="col-lg-2 col-3"><small><strong>5 stars</strong></small></div>
                        </div>
                        {/* /row */}
                        <div className="row">
                            <div className="col-lg-10 col-9">
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '95%' }} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                            </div>
                            <div className="col-lg-2 col-3"><small><strong>4 stars</strong></small></div>
                        </div>
                        {/* /row */}
                        <div className="row">
                            <div className="col-lg-10 col-9">
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '60%' }} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                            </div>
                            <div className="col-lg-2 col-3"><small><strong>3 stars</strong></small></div>
                        </div>
                        {/* /row */}
                        <div className="row">
                            <div className="col-lg-10 col-9">
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '20%' }} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                            </div>
                            <div className="col-lg-2 col-3"><small><strong>2 stars</strong></small></div>
                        </div>
                        {/* /row */}
                        <div className="row">
                            <div className="col-lg-10 col-9">
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: 0 }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                            </div>
                            <div className="col-lg-2 col-3"><small><strong>1 stars</strong></small></div>
                        </div>
                        {/* /row */}
                    </div>
                </div>
                {/* /row */}
            </div>
            <hr />
            <div className="reviews-container">
                <div className="review-box clearfix">
                    <figure className="rev-thumb"><img src="http://via.placeholder.com/150x150/ccc/fff/avatar1.jpg" alt />
                    </figure>
                    <div className="rev-content">
                        <div className="rating">
                            <i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star" />
                        </div>
                        <div className="rev-info">
                            Admin – April 03, 2016:
                        </div>
                        <div className="rev-text">
                            <p>
                                Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis
                            </p>
                        </div>
                    </div>
                </div>
                {/* /review-box */}
                <div className="review-box clearfix">
                    <figure className="rev-thumb"><img src="http://via.placeholder.com/150x150/ccc/fff/avatar2.jpg" alt />
                    </figure>
                    <div className="rev-content">
                        <div className="rating">
                            <i className="icon-star voted" /><i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star" />
                        </div>
                        <div className="rev-info">
                            Ahsan – April 01, 2016:
                        </div>
                        <div className="rev-text">
                            <p>
                                Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis
                            </p>
                        </div>
                    </div>
                </div>
                {/* /review-box */}
                <div className="review-box clearfix">
                    <figure className="rev-thumb"><img src="http://via.placeholder.com/150x150/ccc/fff/avatar3.jpg" alt />
                    </figure>
                    <div className="rev-content">
                        <div className="rating">
                            <i className="icon-star voted" /><i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star" />
                        </div>
                        <div className="rev-info">
                            Sara – March 31, 2016:
                        </div>
                        <div className="rev-text">
                            <p>
                                Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis
                            </p>
                        </div>
                    </div>
                </div>
                {/* /review-box */}
            </div>
            {/* /review-container */}
        </section>
    );
};
export default CourseReviews