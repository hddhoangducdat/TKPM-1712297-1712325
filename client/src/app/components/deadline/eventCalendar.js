import React, { useState } from "react";
import { GROUP_DETAIL_ON } from "../../store/value";
import { useDispatch } from "react-redux";
import { getGroup } from "../../store/actions";
import Group from "../../layout/main/group";

const EventCalendar = ({ days, ktra, index, colorTab, setRender }) => {
  const [seen, setSeen] = useState(false);
  const dispatch = useDispatch();

  return (
    <span className="event">
      <p onClick={() => setSeen(!seen)}>{days[index].day}</p>
      {seen ? (
        <div className="event-ngoai">
          {ktra.map((dl) => {
            return (
              <div key={dl._id} className="event-container">
                <div
                  className="event-container__header"
                  onClick={() => {
                    colorTab(2);
                    dispatch(getGroup({ groupId: dl.groupId }));
                    dispatch({ type: GROUP_DETAIL_ON });
                    setRender(<Group />);
                  }}
                >
                  {dl.title}
                </div>
                <a href={dl.fileUrl} className="event-container__group">
                  {"File đính kèm"}
                </a>
              </div>
            );
          })}
        </div>
      ) : (
        <div></div>
      )}
    </span>
  );
};

export default EventCalendar;
