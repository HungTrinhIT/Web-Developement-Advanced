import React from 'react';

const CourseLessons = () => {
    return (
        <section id="lessons">
            <div className="intro_title">
                <h2>Lessons</h2>
                <ul>
                    <li>18 lessons</li>
                    <li>01:02:10</li>
                </ul>
            </div>
            <div id="accordion_lessons" role="tablist" className="add_bottom_45">
                <div className="card">
                    <div className="card-header" role="tab" id="headingOne">
                        <h5 className="mb-0">
                            <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><i className="indicator ti-minus" /> Introdocution</a>
                        </h5>
                    </div>
                    <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion_lessons">
                        <div className="card-body">
                            <div className="list_lessons">
                                <ul>
                                    <li><a href="https://www.youtube.com/watch?v=LDgd_gUcqCw" className="video">Health Science</a><span>00:59</span></li>
                                    <li><a href="https://www.youtube.com/watch?v=LDgd_gUcqCw" className="video">Health and Social Care</a><span>00:59</span></li>
                                    <li><a href="#0" className="txt_doc">Audiology</a><span>00:59</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /card */}
                <div className="card">
                    <div className="card-header" role="tab" id="headingTwo">
                        <h5 className="mb-0">
                            <a className="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <i className="indicator ti-plus" />Generative Modeling Review
                            </a>
                        </h5>
                    </div>
                    <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion_lessons">
                        <div className="card-body">
                            <div className="list_lessons">
                                <ul>
                                    <li><a href="https://www.youtube.com/watch?v=LDgd_gUcqCw" className="video">Health Science</a><span>00:59</span></li>
                                    <li><a href="https://www.youtube.com/watch?v=LDgd_gUcqCw" className="video">Health and Social Care</a><span>00:59</span></li>
                                    <li><a href="https://www.youtube.com/watch?v=LDgd_gUcqCw" className="video">History</a><span>00:59</span></li>
                                    <li><a href="https://www.youtube.com/watch?v=LDgd_gUcqCw" className="video">Healthcare Science</a><span>00:59</span></li>
                                    <li><a href="#0" className="txt_doc">Audiology</a><span>00:59</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /card */}
                <div className="card">
                    <div className="card-header" role="tab" id="headingThree">
                        <h5 className="mb-0">
                            <a className="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <i className="indicator ti-plus" />Variational Autoencoders
                            </a>
                        </h5>
                    </div>
                    <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion_lessons">
                        <div className="card-body">
                            <div className="list_lessons">
                                <ul>
                                    <li><a href="https://www.youtube.com/watch?v=LDgd_gUcqCw" className="video">Health Science</a><span>00:59</span></li>
                                    <li><a href="https://www.youtube.com/watch?v=LDgd_gUcqCw" className="video">Health and Social Care</a><span>00:59</span></li>
                                    <li><a href="https://www.youtube.com/watch?v=LDgd_gUcqCw" className="video">History</a><span>00:59</span></li>
                                    <li><a href="https://www.youtube.com/watch?v=LDgd_gUcqCw" className="video">Healthcare Science</a><span>00:59</span></li>
                                    <li><a href="#0" className="txt_doc">Audiology</a><span>00:59</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /card */}
                <div className="card">
                    <div className="card-header" role="tab" id="headingFourth">
                        <h5 className="mb-0">
                            <a className="collapsed" data-toggle="collapse" href="#collapseFourth" aria-expanded="false" aria-controls="collapseFourth">
                                <i className="indicator ti-plus" />Gaussian Mixture Model Review
                            </a>
                        </h5>
                    </div>
                    <div id="collapseFourth" className="collapse" role="tabpanel" aria-labelledby="headingFourth" data-parent="#accordion_lessons">
                        <div className="card-body">
                            <div className="list_lessons">
                                <ul>
                                    <li><a href="https://www.youtube.com/watch?v=LDgd_gUcqCw" className="video">Health Science</a><span>00:59</span></li>
                                    <li><a href="https://www.youtube.com/watch?v=LDgd_gUcqCw" className="video">Health and Social Care</a><span>00:59</span></li>
                                    <li><a href="https://www.youtube.com/watch?v=LDgd_gUcqCw" className="video">History</a><span>00:59</span></li>
                                    <li><a href="https://www.youtube.com/watch?v=LDgd_gUcqCw" className="video">Healthcare Science</a><span>00:59</span></li>
                                    <li><a href="#0" className="txt_doc">Audiology</a><span>00:59</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /card */}
            </div>
            {/* /accordion */}
        </section>
    );
};
export default CourseLessons;