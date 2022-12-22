import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";
import Mybutton from "../component/Mybutton";
import MyHeader from "../component/MyHeader";
import { getStringDate } from "../util/data";
import { emotionList } from "../util/emotion";

const Diary = () => {
  const { id } = useParams();
  const diaryList = useContext(DiaryStateContext);
  const navigate = useNavigate();
  const [data, setData] = useState();

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `감정 일기장 - ${parseInt(id) + 1}번째 일기`;
  }, []);

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );
      if (targetDiary) {
        setData(targetDiary);
      } else {
        alert("없는 일기입니다.");
        navigate("/", { replace: true });
      }
    }
  }, [id, diaryList]);

  if (!data) {
    return <div className="DiaryPage">로딩중...</div>;
  } else {
    const curEmotionData = emotionList.find(
      (it) => parseInt(it.emotion_id) === parseInt(data.emotion)
    );

    return (
      <div className="DiaryPage">
        <MyHeader
          headText={`${getStringDate(new Date(data.date))} 기록`}
          leftChild={
            <Mybutton text={"< 뒤로가기"} onClick={() => navigate(-1)} />
          }
          rightChild={
            <Mybutton
              text={"수정하기"}
              onClick={() => navigate(`/edit/${data.id}`)}
            />
          }
        />
        <article>
          <section>
            <h2>오늘의 감정</h2>
            <div
              className={[
                "diary_img_wrapper",
                `diary_img_wrapper_${data.emotion}`,
              ].join(" ")}
            >
              <img src={curEmotionData.emotion_img} />
              <div className="emotion_descript">
                {curEmotionData.emotion_descript}
              </div>
            </div>
          </section>
          <section>
            <h2>오늘의 일기</h2>
            <div className="diary_content_wrapper">
              <p>{data.content}</p>
            </div>
          </section>
        </article>
      </div>
    );
  }
};

export default Diary;
