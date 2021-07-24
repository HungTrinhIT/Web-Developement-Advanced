import React from 'react';

const CourseDescription = () => {
    return (
        <section id="description">
            <h2>Description</h2>
            <p>Per consequat adolescens ex, cu nibh commune temporibus vim, ad sumo viris eloquentiam sed. Mea appareat omittantur eloquentiam ad, nam ei quas oportere democritum. Prima causae admodum id est, ei timeam inimicus sed. Sit an meis aliquam, cetero inermis vel ut. An sit illum euismod facilisis, tamquam vulputate pertinacia eum at.</p>
            <h5>What will you learn</h5>
            <ul className="list_ok">
                <li>
                    <h6>Suas summo id sed erat erant oporteat</h6>
                    <p>Ut unum diceret eos, mel cu velit principes, ut quo inani dolorem mediocritatem. Mea in justo posidonium necessitatibus.</p>
                </li>
                <li>
                    <h6>Illud singulis indoctum ad sed</h6>
                    <p>Ut unum diceret eos, mel cu velit principes, ut quo inani dolorem mediocritatem. Mea in justo posidonium necessitatibus.</p>
                </li>
                <li>
                    <h6>Alterum bonorum mentitum an mel</h6>
                    <p>Ut unum diceret eos, mel cu velit principes, ut quo inani dolorem mediocritatem. Mea in justo posidonium necessitatibus.</p>
                </li>
            </ul>
            <hr />
            <p>Mea appareat omittantur eloquentiam ad, nam ei quas oportere democritum. Prima causae admodum id est, ei timeam inimicus sed. Sit an meis aliquam, cetero inermis vel ut. An sit illum euismod facilisis, tamquam vulputate pertinacia eum at.</p>
            <div className="row">
                <div className="col-lg-6">
                    <ul className="bullets">
                        <li>Dolorem mediocritatem</li>
                        <li>Mea appareat</li>
                        <li>Prima causae</li>
                        <li>Singulis indoctum</li>
                    </ul>
                </div>
                <div className="col-lg-6">
                    <ul className="bullets">
                        <li>Timeam inimicus</li>
                        <li>Oportere democritum</li>
                        <li>Cetero inermis</li>
                        <li>Pertinacia eum</li>
                    </ul>
                </div>
            </div>
            {/* /row */}
        </section>

    );
};
export default CourseDescription;