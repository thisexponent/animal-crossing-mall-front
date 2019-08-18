import React, {Fragment} from "react"
import {Link, withRouter} from "react-router-dom"
import {signout, isAuthenticated} from "../auth"

const isActive = (history, path) => {
  if(history.location.pathname === path){
    return {color: "#ff9900"}
  } else {
    return {color: "#020202"}
  }
}


const Menu = ({history}) => (
  <div>
    <ul className={"nav nav-tabs bg-white"}>
      <li className={"nav-item"}>
        <Link className={"nav-link"} style={isActive(history, "/")} to={"/"}>HOME</Link>
      </li>
      {isAuthenticated() && isAuthenticated().user.role === 0 && (
          <Fragment>
            <li className={"nav-item"}>
              <Link className={"nav-link"} style={isActive(history, "/user/dashboard")} to={"/user/dashboard"}>마이페이지</Link>
            </li>
          </Fragment>
      )}

      {isAuthenticated() && isAuthenticated().user.role === 1 && (
          <Fragment>
            <li className={"nav-item"}>
              <Link className={"nav-link"} style={isActive(history, "/admin/dashboard")} to={"/admin/dashboard"}>관리자 메뉴</Link>
            </li>
          </Fragment>
      )}
      {!isAuthenticated() && (
        <Fragment>
          <li className={"nav-item"}>
            <Link className={"nav-link"} style={isActive(history, "/signin")} to={"/signin"}>로그인</Link>
          </li>
          <li className={"nav-item"}>
            <Link className={"nav-link"} style={isActive(history, "/signup")} to={"/signup"}>회원가입</Link>
          </li>
        </Fragment>

      )}

      {isAuthenticated() && (
          <Fragment>
            <li className={"nav-item"}>
              <span
                  className={"nav-link"}
                  style={{cursor: 'pointer', color: '#020202'}}
                  onClick={()=>signout(()=>{
                    history.push("/")
                  })}
              >
                로그아웃
              </span>
            </li>
        </Fragment>
      )}

    </ul>
  </div>
)

export default withRouter(Menu)