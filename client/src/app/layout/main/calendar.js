import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import nested from "../../utils/nested";
import { getDeadLineAll } from "../../store/actions";
import EventCalendar from "../../components/deadline/eventCalendar";

const Calendar = ({ colorTab, setRender }) => {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [days, setDays] = useState([]);
  const [deadline, setDeadline] = useState([]);
  const groupList = useSelector((state) => {
    return state.auth.user.chatBox.filter((c) => {
      return nested(c, "groupId") && c.groupId !== "none" && c.groupId !== "";
    });
  });
  const dispatch = useDispatch();

  const monthArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    let firstDay = new Date(year, month).getDay() - 1;
    const preMonthLength = 32 - new Date(year, month - 1, 32).getDate();
    let i = 0;
    let arr = [];
    while (i <= firstDay) {
      arr = [
        ...arr,
        {
          day: preMonthLength - firstDay + i,
          month: month === 0 ? 11 : month - 1,
          year: month === 0 ? year - 1 : year,
          type: "preMonth",
        },
      ];
      i = i + 1;
    }
    const monthLength = 32 - new Date(year, month, 32).getDate();
    for (let i = 1; i <= monthLength; i++) {
      arr = [
        ...arr,
        {
          day: i <= 9 ? "0" + i : i,
          month,
          year,
          type: "month",
        },
      ];
    }
    i = 1;
    while (arr.length < 42) {
      arr = [
        ...arr,
        {
          day: i <= 9 ? "0" + i : i,
          month: month === 11 ? 0 : month + 1,
          year: month === 11 ? year + 1 : year,
          type: "preMonth",
        },
      ];
      i = i + 1;
    }
    setDays(arr);
  }, [month, year]);

  useEffect(() => {
    dispatch(
      getDeadLineAll(
        groupList.map((g) => g.groupId),
        setDeadline
      )
    );
  }, [groupList.length]);

  const render = (index) => {
    // console.log(deadline);
    const ktra = deadline.filter((dl) => {
      const newDate = new Date(dl.timeEnd);
      if (
        newDate.getDate() === parseInt(days[index].day) &&
        newDate.getMonth() === days[index].month &&
        newDate.getFullYear() === days[index].year
      )
        return true;
      else return false;
    });
    if (ktra.length > 0) {
      return (
        <EventCalendar
          colorTab={colorTab}
          days={days}
          index={index}
          ktra={ktra}
          setRender={setRender}
        />
      );
    }
    if (
      parseInt(days[index].day) === new Date().getDate() &&
      new Date().getMonth() === days[index].month &&
      new Date().getFullYear() === days[index].year
    )
      return <span className="active">{days[index].day}</span>;
    if (days[index].type === "preMonth")
      return <span className="last-month">{days[index].day}</span>;
    else return <span>{days[index].day}</span>;
  };

  if (days.length !== 42) return <div></div>;
  return (
    <div className="container-calendar">
      <div className="calendar">
        <div className="front">
          <div className="current-date">
            <p
              onClick={() => {
                if (month === 0) {
                  setMonth(11);
                  setYear(year - 1);
                } else {
                  setMonth(month - 1);
                }
              }}
            >
              {String.fromCodePoint(0x25c0)}
            </p>
            <h1>{monthArr[month]}</h1>
            <p
              onClick={() => {
                if (month === 11) {
                  setMonth(0);
                  setYear(year + 1);
                } else {
                  setMonth(month + 1);
                }
              }}
            >
              {String.fromCodePoint(0x25b6)}
            </p>
            <p onClick={() => setYear(year - 1)}>
              {String.fromCodePoint(0x25c0)}
            </p>
            <h1>{year}</h1>
            <p onClick={() => setYear(year + 1)}>
              {String.fromCodePoint(0x25b6)}
            </p>
          </div>

          <div className="current-month">
            <ul className="week-days">
              <li>MON</li>
              <li>TUE</li>
              <li>WED</li>
              <li>THU</li>
              <li>FRI</li>
              <li>SAT</li>
              <li>SUN</li>
            </ul>

            <div className="weeks">
              <div className="weeks-contain">
                {render(0)}
                {render(1)}
                {render(2)}
                {render(3)}
                {render(4)}
                {render(5)}
                {render(6)}
              </div>

              <div className="weeks-contain">
                {render(7)}
                {render(8)}
                {render(9)}
                {render(10)}
                {render(11)}
                {render(12)}
                {render(13)}
              </div>
              <div className="weeks-contain">
                {render(14)}
                {render(15)}
                {render(16)}
                {render(17)}
                {render(18)}
                {render(19)}
                {render(20)}
              </div>
              <div className="weeks-contain">
                {render(21)}
                {render(22)}
                {render(23)}
                {render(24)}
                {render(25)}
                {render(26)}
                {render(27)}
              </div>
              <div className="weeks-contain">
                {render(28)}
                {render(29)}
                {render(30)}
                {render(31)}
                {render(32)}
                {render(33)}
                {render(34)}
              </div>

              <div className="weeks-contain">
                {render(35)}
                {render(36)}
                {render(37)}
                {render(38)}
                {render(39)}
                {render(40)}
                {render(41)}
              </div>

              {/*          
              <div>
                <span>04</span>
                <span>05</span>
                <span className="event">06</span>
                <span>07</span>
                <span>08</span>
                <span>09</span>
                <span>10</span>
              </div>

              <div>
                <span>11</span>
                <span>12</span>
                <span>13</span>
                <span>14</span>
                <span className="active">15</span>
                <span>16</span>
                <span>17</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
