/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { getDeadline } from "../../store/actions";

import { ReactComponent as TeamIcon } from "../../asset/img/icon/team.svg";
import { ReactComponent as EyeIcon } from "../../asset/img/icon/eye.svg";
import { ReactComponent as LockIcon } from "../../asset/img/icon/lock.svg";
import { ReactComponent as FileIcon } from "../../asset/img/icon/file.svg";
import { connect, useSelector } from "react-redux";
import nested from "../../utils/nested";
import DeadLineButton from "./deadlineButton";

const GroupInfo = ({ getDeadline }) => {
  const { deadline, group, auth } = useSelector((state) => state);

  useEffect(() => {
    if (group !== false) {
      getDeadline();
    }
  }, [group]);

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
          <li key={1} className="group-page-home-main-right__share__list__file">
            <img
              src="https://scontent-xsp1-2.xx.fbcdn.net/v/t1.0-0/p320x320/118011160_2839021256423292_2922419493353089090_n.jpg?_nc_cat=106&_nc_sid=b9115d&_nc_ohc=A44hDx2T_TEAX-AoeMg&_nc_ht=scontent-xsp1-2.xx&_nc_tp=6&oh=4c3a16d4bb7615dab3c59874cf247ead&oe=5F660B9A"
              alt=""
            />
          </li>

          <li key={2} className="group-page-home-main-right__share__list__file">
            <img
              src="https://scontent-xsp1-2.xx.fbcdn.net/v/t1.0-0/p320x320/118011160_2839021256423292_2922419493353089090_n.jpg?_nc_cat=106&_nc_sid=b9115d&_nc_ohc=A44hDx2T_TEAX-AoeMg&_nc_ht=scontent-xsp1-2.xx&_nc_tp=6&oh=4c3a16d4bb7615dab3c59874cf247ead&oe=5F660B9A"
              alt=""
            />
          </li>

          <li key={3} className="group-page-home-main-right__share__list__file">
            <img
              src="https://scontent-xsp1-2.xx.fbcdn.net/v/t1.0-0/p320x320/118011160_2839021256423292_2922419493353089090_n.jpg?_nc_cat=106&_nc_sid=b9115d&_nc_ohc=A44hDx2T_TEAX-AoeMg&_nc_ht=scontent-xsp1-2.xx&_nc_tp=6&oh=4c3a16d4bb7615dab3c59874cf247ead&oe=5F660B9A"
              alt=""
            />
          </li>

          <li key={4} className="group-page-home-main-right__share__list__file">
            <img
              src="https://scontent-xsp1-2.xx.fbcdn.net/v/t1.0-0/p320x320/118011160_2839021256423292_2922419493353089090_n.jpg?_nc_cat=106&_nc_sid=b9115d&_nc_ohc=A44hDx2T_TEAX-AoeMg&_nc_ht=scontent-xsp1-2.xx&_nc_tp=6&oh=4c3a16d4bb7615dab3c59874cf247ead&oe=5F660B9A"
              alt=""
            />
          </li>

          <li key={5} className="group-page-home-main-right__share__list__file">
            <img
              src="https://scontent-xsp1-2.xx.fbcdn.net/v/t1.0-0/p320x320/118011160_2839021256423292_2922419493353089090_n.jpg?_nc_cat=106&_nc_sid=b9115d&_nc_ohc=A44hDx2T_TEAX-AoeMg&_nc_ht=scontent-xsp1-2.xx&_nc_tp=6&oh=4c3a16d4bb7615dab3c59874cf247ead&oe=5F660B9A"
              alt=""
            />
          </li>
          <li key={6} className="group-page-home-main-right__share__list__file">
            <a href="#">
              <FileIcon />
            </a>
            <span>CSDL.txt</span>
          </li>
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
