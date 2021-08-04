import React from "react";

const NewsList = () => {
  return (
    <div className="row">
      <div className="col-lg-6">
        <a className="box_news" href="#0">
          <figure>
            <img src="assets/img/blog-1.jpg" alt />
            <figcaption>
              <strong>28</strong>Dec
            </figcaption>
          </figure>
          <ul>
            <li>Mark Twain</li>
            <li>20.11.2017</li>
          </ul>
          <h4>Pri oportere scribentur eu</h4>
          <p>
            Cu eum alia elit, usu in eius appareat, deleniti sapientem
            honestatis eos ex. In ius esse ullum vidisse....
          </p>
        </a>
      </div>
      {/* /box_news */}
      <div className="col-lg-6">
        <a className="box_news" href="#0">
          <figure>
            <img src="assets/img/blog-2.jpg" alt />
            <figcaption>
              <strong>28</strong>Dec
            </figcaption>
          </figure>
          <ul>
            <li>Jhon Doe</li>
            <li>20.11.2017</li>
          </ul>
          <h4>Duo eius postea suscipit ad</h4>
          <p>
            Cu eum alia elit, usu in eius appareat, deleniti sapientem
            honestatis eos ex. In ius esse ullum vidisse....
          </p>
        </a>
      </div>
      {/* /box_news */}
      <div className="col-lg-6">
        <a className="box_news" href="#0">
          <figure>
            <img src="assets/img/blog-3.jpg" alt />
            <figcaption>
              <strong>28</strong>Dec
            </figcaption>
          </figure>
          <ul>
            <li>Luca Robinson</li>
            <li>20.11.2017</li>
          </ul>
          <h4>Elitr mandamus cu has</h4>
          <p>
            Cu eum alia elit, usu in eius appareat, deleniti sapientem
            honestatis eos ex. In ius esse ullum vidisse....
          </p>
        </a>
      </div>
      {/* /box_news */}
      <div className="col-lg-6">
        <a className="box_news" href="#0">
          <figure>
            <img src="assets/img/blog-4.jpg" alt />
            <figcaption>
              <strong>28</strong>Dec
            </figcaption>
          </figure>
          <ul>
            <li>Paula Rodrigez</li>
            <li>20.11.2017</li>
          </ul>
          <h4>Id est adhuc ignota delenit</h4>
          <p>
            Cu eum alia elit, usu in eius appareat, deleniti sapientem
            honestatis eos ex. In ius esse ullum vidisse....
          </p>
        </a>
      </div>
      {/* /box_news */}
    </div>
  );
};

export default NewsList;
