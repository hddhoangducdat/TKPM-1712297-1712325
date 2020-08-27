import React from "react";
import { useSelector, connect } from "react-redux";
import { getListMessage, seenMessage } from "../../store/actions";

const MessengerList = ({ getListMessage, setChatBox, seenMessage }) => {
  const chatBox = useSelector((state) =>
    state.auth.id !== "" ? state.auth.user.chatBox : []
  );

  return (
    <div className="messenger-list">
      <ul className="messenger-list-ul">
        {chatBox.map((c, index) => {
          return (
            <li
              key={c.id}
              className="messenger-list-ul-detail"
              onClick={() => {
                setChatBox({
                  active: true,
                  data: c,
                });
                if (!c.seen) {
                  seenMessage(c.id);
                }
                getListMessage(c.id);
              }}
            >
              <div className="messenger-list-ul-detail__img">
                <img
                  className="messenger-list-ul-detail__img__avatar"
                  alt=""
                  src={c.avatar}
                />
                <div className="messenger-list-ul-detail__img__online"></div>
              </div>
              <div className="messenger-list-ul-detail__text">
                <div className="messenger-list-ul-detail__text__name">
                  {c.name}
                </div>
                {!c.seen ? (
                  <div className="messenger-list-ul-detail__text__noti messenger-list-ul-detail__text__noti__seen">
                    {c.noti}
                  </div>
                ) : (
                  <div className="messenger-list-ul-detail__text__noti">
                    {c.noti}
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default connect(null, { seenMessage, getListMessage })(MessengerList);
