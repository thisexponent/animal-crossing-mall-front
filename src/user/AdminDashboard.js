import React from "react"
import Layout from "../core/Layout"
import {isAuthenticated} from "../auth";
import {Link} from "react-router-dom"
const AdminDashboard = () => {

  const {user: {name, email, role}} = isAuthenticated();

  const adminLinks = () => {
    return (
        <div className={"card"}>
          <h4 className={"card-header"}>판매자 메뉴</h4>
          <ul className={"list-group"}>
            <li className={"list-group-item"}>
              <Link className={"nav-link"} to={"/create/category"}>
                카테고리 추가
              </Link>
            </li>
            <li className={"list-group-item"}>
              <Link className={"nav-link"} to={"/create/product"}>
                상품 추가
              </Link>
            </li>
          </ul>
        </div>
    )
  };

  const adminInfo = () => {
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


  return (
      <Layout
          title={`Admin Page`}
          description={"어드민 페이지입니당!"}
          className={"container-fluid"}>
        <div className={"row"}>
          <div className={"col-3"}>
            {adminLinks()}
          </div>
          <div className={"col-9"}>
            {adminInfo()}
          </div>
        </div>
      </Layout>
  )
}

export default AdminDashboard