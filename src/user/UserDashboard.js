import React from "react"
import Layout from "../core/Layout"
import {isAuthenticated} from "../auth";
import {Link} from "react-router-dom"
const Dashboard = () => {

  const {user: {name, email, role}} = isAuthenticated();

  const userLinks = () => {
    return (
        <div className={"card"}>
          <h4 className={"card-header"}>User Links</h4>
          <ul className={"list-group"}>
            <li className={"list-group-item"}>
              <Link className={"nav-link"} to={"/cart"}>
                장바구니
              </Link>
            </li>
            <li className={"list-group-item"}>
              <Link className={"nav-link"} to={"/profile/update"}>
                프로필 수정
              </Link>
            </li>
          </ul>
        </div>
    )
  };

  const userInfo = () => {
    return (
        <div className={"card mb-5"}>
          <h3 className={"card-header"}>User Information</h3>
          <ul className={"list-group"}>
            <li className={"list-group-item"}>{name}</li>
            <li className={"list-group-item"}>{email}</li>
            <li className={"list-group-item"}>{role === 1 ? 'Admin': 'Registered User'}</li>
          </ul>
        </div>
    )
  };

  const purchaseHistory = () => {
    return (
        <div className={"card mb-5"}>
          <h3 className={"card-header"}>User Information</h3>
          <ul className={"list-group"}>
            <li className={"list-group-item"}>history</li>
          </ul>
        </div>
    )
  }
  return (
      <Layout
          title={`Hello, ${name}`}
          description={"프로필 페이지입니당!"}
          className={"container-fluid"}>
        <div className={"row"}>
          <div className={"col-3"}>
            {userLinks()}
          </div>
          <div className={"col-9"}>
            {userInfo()}
            {purchaseHistory()}
          </div>
        </div>
      </Layout>
  )
}

export default Dashboard