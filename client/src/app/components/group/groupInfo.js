import React from "react";

import { ReactComponent as TeamIcon } from "../../asset/img/icon/team.svg";
import { ReactComponent as EyeIcon } from "../../asset/img/icon/eye.svg";
import { ReactComponent as LockIcon } from "../../asset/img/icon/lock.svg";
import { ReactComponent as FileIcon } from "../../asset/img/icon/file.svg";

const GroupInfo = () => {
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
          <li className="group-page-home-main-right__share__list__file">
            <img
              src="https://scontent-xsp1-2.xx.fbcdn.net/v/t1.0-0/p320x320/118011160_2839021256423292_2922419493353089090_n.jpg?_nc_cat=106&_nc_sid=b9115d&_nc_ohc=A44hDx2T_TEAX-AoeMg&_nc_ht=scontent-xsp1-2.xx&_nc_tp=6&oh=4c3a16d4bb7615dab3c59874cf247ead&oe=5F660B9A"
              alt=""
            />
          </li>

          <li className="group-page-home-main-right__share__list__file">
            <img
              src="https://scontent-xsp1-2.xx.fbcdn.net/v/t1.0-0/p320x320/118011160_2839021256423292_2922419493353089090_n.jpg?_nc_cat=106&_nc_sid=b9115d&_nc_ohc=A44hDx2T_TEAX-AoeMg&_nc_ht=scontent-xsp1-2.xx&_nc_tp=6&oh=4c3a16d4bb7615dab3c59874cf247ead&oe=5F660B9A"
              alt=""
            />
          </li>

          <li className="group-page-home-main-right__share__list__file">
            <img
              src="https://scontent-xsp1-2.xx.fbcdn.net/v/t1.0-0/p320x320/118011160_2839021256423292_2922419493353089090_n.jpg?_nc_cat=106&_nc_sid=b9115d&_nc_ohc=A44hDx2T_TEAX-AoeMg&_nc_ht=scontent-xsp1-2.xx&_nc_tp=6&oh=4c3a16d4bb7615dab3c59874cf247ead&oe=5F660B9A"
              alt=""
            />
          </li>

          <li className="group-page-home-main-right__share__list__file">
            <img
              src="https://scontent-xsp1-2.xx.fbcdn.net/v/t1.0-0/p320x320/118011160_2839021256423292_2922419493353089090_n.jpg?_nc_cat=106&_nc_sid=b9115d&_nc_ohc=A44hDx2T_TEAX-AoeMg&_nc_ht=scontent-xsp1-2.xx&_nc_tp=6&oh=4c3a16d4bb7615dab3c59874cf247ead&oe=5F660B9A"
              alt=""
            />
          </li>

          <li className="group-page-home-main-right__share__list__file">
            <img
              src="https://scontent-xsp1-2.xx.fbcdn.net/v/t1.0-0/p320x320/118011160_2839021256423292_2922419493353089090_n.jpg?_nc_cat=106&_nc_sid=b9115d&_nc_ohc=A44hDx2T_TEAX-AoeMg&_nc_ht=scontent-xsp1-2.xx&_nc_tp=6&oh=4c3a16d4bb7615dab3c59874cf247ead&oe=5F660B9A"
              alt=""
            />
          </li>
          <li className="group-page-home-main-right__share__list__file">
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
        <li className="group-page-home-decorate">
          <div className="group-page-home-main-right__introduce__title">
            #5 Deadline: Java App
          </div>
          <div className="group-page-home-main-right__deadline__info">
            <div>Start Date: 20/07/2020</div>
            <div>End Date: 25/07/2020</div>
            <div>Time Left: 1h30m</div>
            <div className="group-page-home-main-right__deadline__info__image">
              <a href="#">
                <FileIcon />
              </a>
              <span>#DEADLINE5.docx</span>
            </div>
            <button className="group-page-home-main-right__deadline__info__can">
              submit
            </button>
          </div>
        </li>
        <li className="group-page-home-decorate">
          <div className="group-page-home-main-right__introduce__title">
            #5 Deadline: Java App
          </div>
          <div className="group-page-home-main-right__deadline__info">
            <div>Start Date: 20/07/2020</div>
            <div>End Date: 25/07/2020</div>
            <div className="group-page-home-main-right__deadline__failed">
              Time Left: 25m
            </div>
            <div className="group-page-home-main-right__deadline__info__image">
              <a href="#">
                <FileIcon />
              </a>
              <span>#DEADLINE5.docx</span>
            </div>
            <button className="group-page-home-main-right__deadline__info__cant">
              you failed
            </button>
          </div>
        </li>

        <li className="group-page-home-decorate">
          <div className="group-page-home-main-right__introduce__title">
            #5 Deadline: Java App
          </div>
          <div className="group-page-home-main-right__deadline__info">
            <div>Start Date: 20/07/2020</div>
            <div>End Date: 25/07/2020</div>
            <div className="group-page-home-main-right__deadline__done">
              Time Left: 0m
            </div>
            <div className="group-page-home-main-right__deadline__info__image">
              <a href="#">
                <FileIcon />
              </a>
              <span>#DEADLINE5.docx</span>
            </div>
            <button className="group-page-home-main-right__deadline__info__done">
              <a href="#">
                <FileIcon />
              </a>
              <div>1712325.zip</div>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default GroupInfo;
