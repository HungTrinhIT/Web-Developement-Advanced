import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Avatar, message } from "antd";
import createAction from "../../redux/action/createAction";
import { LOG_OUT } from "../../redux/action/type";

const Header = ({ categories, user, ...props }) => {
  const [search, setSearch] = useState("");
  const { userInfo, isAuthenticated } = user;
  const history = useHistory();
  const onLogout = () => {
    localStorage.removeItem("elearning_accessToken");
    props.dispatch(createAction(LOG_OUT, null));
    history.push("/");
    message.success({
      className: "icon",
      style: {
        marginTop: "15vh",
      },
      content: "You've successfully logged out of Udema. Come back soon!",
    });
  };
  const avatar = userInfo.avatar ? (
    <img
      src={userInfo.avatar}
      style={{
        height: "48px",
        width: "48px",
        objectFit: "cover",
        borderRadius: "100vh",
        border: "2px solid #ffffff",
      }}
      alt={userInfo.fullName}
    />
  ) : (
    <Avatar
      style={{ backgroundColor: "#87d068" }}
      icon={<i className="fas fa-user" />}
      className="icon"
      size="large"
    />
  );
  const userFullnameAndEmail = (
    <div className="ml-2">
      <p
        className="mb-2"
        style={{
          fontWeight: "bold",
          color: "#662d91",
        }}
      >
        {userInfo.fullname}
      </p>
      <p
        className="mb-0"
        style={{ fontSize: "10px", color: "rgb(106, 111, 115)" }}
      >
        {userInfo.email}
      </p>
    </div>
  );
  const dropdownUserInfo = (
    <ul className="avatar">
      <li>
        {avatar}
        <ul className="avatar-sub">
          <li>
            <div className="d-flex align-items-center">
              {avatar}
              {userFullnameAndEmail}
            </div>
          </li>
          <li>
            <Link to="/profile">My learning</Link>
          </li>
          <li>
            <Link to="/profile">My wishlist</Link>
          </li>
          <li>
            <Link to="/profile">Profile edit</Link>
          </li>
          <li>
            <Link to="/profile">Become teacher</Link>
          </li>
          <li>
            <a onClick={onLogout}>Log out</a>
          </li>
        </ul>
      </li>
    </ul>
  );

  const displayNavbarUser = isAuthenticated ? (
    <>
      <div className="mr-1">
        <Link to="/profile">
          <button className="myBtn">My wishlist</button>
        </Link>
      </div>
      <div className="mr-4">
        <Link to="/profile">
          <button className="myBtn">My Learning</button>
        </Link>
      </div>
      <div>{dropdownUserInfo}</div>
    </>
  ) : (
    <>
      <a
        href="http://localhost:3001/"
        target="_blank"
        style={{
          fontSize: "16px",
          color: "white",
          marginRight: "16px",
        }}
      >
        Become Udema Teacher
      </a>
      <div className="hidden_tablet mr-2">
        <Link to="/login" className="myBtn rounded">
          LOG IN
        </Link>
      </div>
      <div className="hidden_tablet">
        <Link to="/register" className="myBtn rounded">
          SIGN UP
        </Link>
      </div>
    </>
  );
  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };
  const onCourseSearchSubmit = (e) => {
    e.preventDefault();
    history.push(`/courses?search=${search}`);
  };
  return (
    <header className="header menu_2 d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center">
        <div id="logo">
          <Link to="/">
            <img
              src="assets/img/logo.png"
              style={{
                width: "112px",
                height: "auto",
                objectFit: "cover",
              }}
              width={124}
              height={42}
              alt="hinh ne"
            />
          </Link>
        </div>
        <a href="#menu" className="btn_mobile">
          <div className="hamburger hamburger--spin" id="hamburger">
            <div className="hamburger-box">
              <div className="hamburger-inner" />
            </div>
          </div>
        </a>
        <nav id="menu" className="main-menu">
          <ul>
            <li>
              <span className="mr-2">
                <i className="fas fa-th mr-1"></i>
                <span>Categories</span>
              </span>
              <ul>
                {props.rootCategories.map((item, index) => {
                  return (
                    <li key={item.id}>
                      <Link to={`/courses?cat=${item.id}`}>{item.catName}</Link>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li>
              <form onSubmit={onCourseSearchSubmit}>
                <div id="custom-search-input" className="mt-0">
                  <div className="input-group">
                    <input
                      type="text"
                      className=" search-query"
                      placeholder="Ex. Architecture, Specialization..."
                      value={search}
                      onChange={onSearchChange}
                      name="search"
                    />
                  </div>
                </div>
              </form>
            </li>
          </ul>
        </nav>
        {/* /top_menu */}
      </div>
      <div className="d-flex align-items-center">{displayNavbarUser}</div>
    </header>
  );
};
const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories,
    rootCategories: state.categories.rootCategories,
    user: state.users,
  };
};
export default connect(mapStateToProps)(Header);
