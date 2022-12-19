import React, { useEffect, useContext, useState } from "react";
import { DiaryStateContext } from "../App";
import DiaryList from "../component/DiaryList";
import Mybutton from "../component/Mybutton";
import MyHeader from "../component/MyHeader";

const Home = () => {
  const dairyList = useContext(DiaryStateContext);
  const [data, setData] = useState([]);
  const [curDate, setCurDate] = useState(new Date());
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  useEffect(() => {
    if (dairyList.length >= 1) {
      const firstDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth(),
        1
      ).getTime();

      const lastDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth() + 1,
        0,
        23,
        59,
        59
      ).getTime();

      setData(
        dairyList.filter((it) => firstDay <= it.date && it.date <= lastDay)
      );
    }
  }, [dairyList, curDate]);

  useEffect(() => {
    console.log(data);
  }, [data]);
  const increaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
    );
  };

  const decreaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
    );
  };

  return (
    <div>
      <MyHeader
        headText={headText}
        leftChild={<Mybutton text={"<"} onClick={decreaseMonth} />}
        rightChild={<Mybutton text={">"} onClick={increaseMonth} />}
      />
      <DiaryList diaryList={data} />
    </div>
  );
};

export default Home;
