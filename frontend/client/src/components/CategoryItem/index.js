import React from 'react'
import {Link} from 'react-router-dom'

const CategoryItem = (props) => {
    const {category} = props;
    return (
        <div className="col-lg-4 col-md-6 wow" data-wow-offset={150}>
            <Link to={`/courses`} className="grid_item">
                <figure className="block-reveal">
                    <div className="block-horizzontal" />
                    <img src="assets/img/course_1.jpg" className="img-fluid" alt />
                    <div className="info">
                        <small>
                            <i className="ti-layers" />
                            15 Programmes
                        </small>
                        <h3>{category.catName}</h3>
                    </div>
                </figure>
            </Link>
        </div>
    );
};
export default CategoryItem;