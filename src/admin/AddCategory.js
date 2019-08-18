import React, {useState} from "react";
import Layout from "../core/Layout";
import {isAuthenticated} from "../auth";
import {Link} from "react-router-dom";
import {createCategory} from "./apiAdmin";

const AddCategory = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  // destructure user and token from local storage
  const {user, token} = isAuthenticated()

  const handleChange = (e) => {
    setError('');
    setName(e.target.value);
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    // 카테고리 만들기 요청
    createCategory(user._id, token, {name})
        .then(data => {
          if(data.error){
            setError(true);
          } else {
            setError("");
            setSuccess(true);
          }
        })
  };

  const newCategoryForm = () => (
    <form onSubmit={clickSubmit}>
      <div className={"form-group"}>
        <label className={"text-muted"}>Name</label>
        <input
            type={"text"}
            className={"form-control"}
            onChange={handleChange}
            value={name}
            autoFocus
            required
        />
      </div>
      <button className={"btn btn-outline-primary"}>확인</button>
    </form>
  );

  const showSuccess = () => {
    if(success) {
      return <h3 className={"text-success"}>{name} 카테고리가 생성되었습니다!</h3>
    }
  }

  const showError = () => {
    if(error) {
      return <h3 className={"text-danger"}>{name} 카테고리는 이미 있어요.</h3>
    }
  }

  const goBack = () => (
      <div className={"mt-5"}>
        <Link to={"/admin/dashboard"} className={"text-secondary"}>
          관리자 페이지로 돌아가기
        </Link>
      </div>
  )



  return (
      <Layout
          title={"카테고리 추가"}
          description={"카테고리를 추가해보세요!"}
          className={"container-fluid"}
      >
        <div className={"row"}>
          <div className={"col-md-8 offset-md-2"}>
            {showSuccess()}
            {showError()}
            {newCategoryForm()}
            {goBack()}
          </div>
        </div>
      </Layout>
  );

}

export default AddCategory