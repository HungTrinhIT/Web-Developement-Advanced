import React from "react";

const PageNotFound = () => {
  return (
    <main>
      <div id="error_page">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-xl-7 col-lg-9">
              <h2>
                404 <i className="icon_error-triangle_alt" />
              </h2>
              <p>
                We're sorry, but the page you were looking for doesn't exist.
              </p>
              <form>
                <div className="search_bar_error">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="What are you looking for?"
                  />
                  <input type="submit" defaultValue="Search" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default PageNotFound;
