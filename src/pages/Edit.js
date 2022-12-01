import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");

  const mode = searchParams.get("mode");

  return (
    <div>
      <h2>Edit</h2>
      <p>일기를 수정하는 페이지 입니다.</p>
      <button onClick={() => setSearchParams({who : "chae"})}>QS 바꾸기</button>
      <button onClick={() => navigate("/home")}>HOME으로 가기</button>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </div>
  );
};

export default Edit;
