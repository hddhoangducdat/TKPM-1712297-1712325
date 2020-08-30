/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import {
  getDeadline,
  getAllFileGroup,
  userSubmitDeadline,
} from "../../store/actions";

import { ReactComponent as TeamIcon } from "../../asset/img/icon/team.svg";
import { ReactComponent as EyeIcon } from "../../asset/img/icon/eye.svg";
import { ReactComponent as LockIcon } from "../../asset/img/icon/lock.svg";
import { ReactComponent as FileIcon } from "../../asset/img/icon/file.svg";
import { connect, useSelector, useDispatch } from "react-redux";
import nested from "../../utils/nested";
import DeadLineButton from "./deadlineButton";

const GroupInfo = ({ getDeadline }) => {
  const dispatch = useDispatch();
  const { deadline, group, auth } = useSelector((state) => state);
  const groupFile = useSelector((state) =>
    state.utils.file.groupFile instanceof Array
      ? state.utils.file.groupFile
      : []
  );

  useEffect(() => {
    if (group !== false) {
      dispatch(getAllFileGroup(group._id));
      getDeadline();
    }
  }, [group._id]);

  return (
    <div className="group-page-home-main-right">
      <div className="group-page-home-main-right__introduce group-page-home-decorate">
        <div className="group-page-home-main-right__introduce__title">
          Introduction
        </div>
        <div className="group-page-home-main-right__introduce__contain">
          <a href="#">
            <LockIcon />
          </a>
          <div className="group-page-home-main-right__introduce__contain__info">
            <span>Secret Group</span>
            <p>Mainly for study session & doing deadline</p>
          </div>
        </div>
        <div className="group-page-home-main-right__introduce__contain">
          <a href="#">
            <EyeIcon />
          </a>
          <div className="group-page-home-main-right__introduce__contain__info">
            <span>Seen</span>
            <p>Anyone in group can access</p>
          </div>
        </div>
        <div className="group-page-home-main-right__introduce__contain">
          <a href="#">
            <TeamIcon />
          </a>
          <div className="group-page-home-main-right__introduce__contain__info">
            <span>Group for PPT CNTT 2020</span>
          </div>
        </div>
      </div>
      <div className="group-page-home-main-right__share group-page-home-decorate">
        <div className="group-page-home-main-right__introduce__title">
          Share File
        </div>
        <ul className="group-page-home-main-right__share__list">
          {groupFile.map((f, i) => {
            let arr = f.fileName.split(".");
            if (i > 6) return <li key={f._id}></li>;
            if (
              arr[arr.length - 1] === "jpg" ||
              arr[arr.length - 1] === "jpeg" ||
              arr[arr.length - 1] === "png"
            ) {
              return (
                <li
                  key={f._id}
                  className="group-page-home-main-right__share__list__file"
                >
                  <img src={f.fileUrl} alt="" />
                </li>
              );
            } else {
              return (
                <li
                  key={f._id}
                  className="group-page-home-main-right__share__list__file"
                >
                  <a href={f.fileUrl}>
                    <FileIcon />
                  </a>
                  <span>{f.fileName}</span>
                </li>
              );
            }
          })}
        </ul>
        <button className="group-page-home-main-right__share__button">
          see more
        </button>
      </div>
      <div className="group-page-home-main-right__deadline group-page-home-decorate">
        <div className="group-page-home-main-right__introduce__title">
          Deadline
        </div>
      </div>

      <ul className="group-page-home-main-right__deadline">
        {deadline instanceof Array ? (
          deadline.map((d) => {
            return (
              <li key={d._id} className="group-page-home-decorate">
                <div className="group-page-home-main-right__introduce__title">
                  {d.title}
                </div>
                <div className="group-page-home-main-right__deadline__info">
                  <div>
                    Deadline:{" "}
                    {new Date(d.timeEnd).getDate() +
                      "/" +
                      (new Date(d.timeEnd).getMonth() + 1) +
                      "/" +
                      new Date(d.timeEnd).getFullYear()}
                  </div>
                  <div>Description: {d.description}</div>
                  {d.fileUrl !== "none" ? (
                    <div className="group-page-home-main-right__deadline__info__image">
                      <a href={d.fileUrl}>
                        <FileIcon />
                      </a>
                      <span>{d.fileName}</span>
                    </div>
                  ) : (
                    <div></div>
                  )}

                  {group.admin === auth.id ? (
                    <button className="group-page-home-main-right__deadline__info__can">
                      {d.files.length} submit
                    </button>
                  ) : nested(d, "files") ? (
                    <DeadLineButton deadline={d} />
                  ) : (
                    <div />
                  )}
                </div>
              </li>
            );
          })
        ) : (
          <div />
        )}
      </ul>
    </div>
  );
};

export default connect(null, { getDeadline })(GroupInfo);
