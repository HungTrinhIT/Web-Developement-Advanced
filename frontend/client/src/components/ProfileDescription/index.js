import React from 'react'

const ProfileDescription = () => {
    return (
        <div className="col-lg-9">
            <div className="box_teacher">
                <div className="indent_title_in">
                    <i className="pe-7s-user" />
                    <h3>Profile</h3>
                    <p>Mussum ipsum cacilds, vidis litro abertis.</p>
                </div>
                <div className="wrapper_indent">
                    <p>Lorem ipsum dolor sit amet, dicta oportere ad est, ea eos partem neglegentur theophrastus. Esse voluptatum duo ne, expetenda corrumpit no per, at mei nobis lucilius. No eos semper aperiri neglegentur, vis noluisse quaestio no. Vix an nostro inimicus, qui ut animal fabellas reprehendunt. In quando repudiare intellegebat sed, nam suas dicta melius ea.</p>
                    <p>Mei ut decore accusam consequat, alii dignissim no usu. Phaedrum intellegat sit ut, no pri mutat eirmod. In eum iriure perpetua adolescens, pri dicunt prodesset et. Vis dicta postulant ad.</p>
                    <h5>Credentials</h5>
                    <p>Lorem ipsum dolor sit amet, dicta oportere ad est, ea eos partem neglegentur theophrastus. Esse voluptatum duo ne, expetenda corrumpit no per, at mei nobis lucilius. No eos semper aperiri neglegentur, vis noluisse quaestio no. Vix an nostro inimicus, qui ut animal fabellas reprehendunt. In quando repudiare intellegebat sed, nam suas dicta melius ea.</p>
                    <div className="row">
                        <div className="col-md-6">
                            <ul className="list_3">
                                <li><strong>September 2009 - Bachelor Degree in Economics</strong>
                                    <p>University of Cambrige - United Kingdom</p>
                                </li>
                                <li><strong>December 2012 - Master course in Economics</strong>
                                    <p>University of Cambrige - United Kingdom</p>
                                </li>
                                <li><strong>October 2013 - Master's Degree in Statistic</strong>
                                    <p>University of Oxford - United Kingdom</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul className="list_3">
                                <li><strong>September 2009 - Bachelor Degree in Economics</strong>
                                    <p>University of Cambrige - United Kingdom</p>
                                </li>
                                <li><strong>December 2012 - Master course in Economics</strong>
                                    <p>University of Cambrige - United Kingdom</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* End row*/}
                </div>
                {/*wrapper_indent */}
                <hr className="styled_2" />
                <div className="indent_title_in">
                    <i className="pe-7s-display1" />
                    <h3>My courses</h3>
                    <p>Mussum ipsum cacilds, vidis litro abertis.</p>
                </div>
                <div className="wrapper_indent">
                    <p>Mei ut decore accusam consequat, alii dignissim no usu. Phaedrum intellegat sit ut, no pri mutat eirmod. In eum iriure perpetua adolescens, pri dicunt prodesset et. Vis dicta postulant ad.</p>
                    <div className="table-responsive">
                        <table className="table table-striped add_bottom_30">
                            <thead>
                                <tr>
                                    <th>Category</th>
                                    <th>Course name</th>
                                    <th>Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Business</td>
                                    <td><a href="#">Business Plan</a></td>
                                    <td className="rating"><i className="icon-star voted" /><i className="icon-star voted" /><i className="icon-star voted" /><i className="icon-star voted" /> <i className="icon-star voted" /></td>
                                </tr>
                                <tr>
                                    <td>Business</td>
                                    <td><a href="#">Economy pinciples</a></td>
                                    <td className="rating"><i className="icon-star voted" /><i className="icon-star voted" /><i className="icon-star voted" /><i className="icon-star" /> <i className="icon-star" /></td>
                                </tr>
                                <tr>
                                    <td>Business</td>
                                    <td><a href="#">Understand diagrams</a></td>
                                    <td className="rating"><i className="icon-star voted" /><i className="icon-star voted" /><i className="icon-star voted" /><i className="icon-star voted" /> <i className="icon-star" /></td>
                                </tr>
                                <tr>
                                    <td>Business</td>
                                    <td><a href="#">Marketing strategies</a></td>
                                    <td className="rating"><i className="icon-star voted" /><i className="icon-star voted" /><i className="icon-star voted" /><i className="icon-star voted" /> <i className="icon-star" /></td>
                                </tr>
                                <tr>
                                    <td>Business</td>
                                    <td><a href="#">Marketing</a></td>
                                    <td className="rating"><i className="icon-star voted" /><i className="icon-star voted" /><i className="icon-star voted" /><i className="icon-star voted" /> <i className="icon-star voted" /></td>
                                </tr>
                                <tr>
                                    <td>Business</td>
                                    <td><a href="#">Business Plan</a></td>
                                    <td className="rating"><i className="icon-star voted" /><i className="icon-star voted" /><i className="icon-star voted" /><i className="icon-star" /> <i className="icon-star" /></td>
                                </tr>
                                <tr>
                                    <td>Business</td>
                                    <td><a href="#">Economy pinciples</a></td>
                                    <td className="rating"><i className="icon-star voted" /><i className="icon-star voted" /><i className="icon-star voted" /><i className="icon-star voted" /> <i className="icon-star" /></td>
                                </tr>
                                <tr>
                                    <td>Business</td>
                                    <td><a href="#">Understand diagrams</a></td>
                                    <td className="rating"><i className="icon-star voted" /><i className="icon-star voted" /><i className="icon-star voted" /><i className="icon-star voted" /> <i className="icon-star" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/*wrapper_indent */}
            </div>
        </div>
    );
};
export default ProfileDescription;