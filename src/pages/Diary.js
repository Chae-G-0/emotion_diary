import React from "react";
import { useParams } from "react-router-dom";

const Diary = () => {
  const { id } = useParams();

  return <div>다이어리 상세 페이지</div>;
};

export default Diary;
