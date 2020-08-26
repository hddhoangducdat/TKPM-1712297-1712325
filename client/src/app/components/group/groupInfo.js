import React, { useEffect } from "react";
import { getDeadline } from "../../store/actions";

import { ReactComponent as TeamIcon } from "../../asset/img/icon/team.svg";
import { ReactComponent as EyeIcon } from "../../asset/img/icon/eye.svg";
import { ReactComponent as LockIcon } from "../../asset/img/icon/lock.svg";
import { ReactComponent as FileIcon } from "../../asset/img/icon/file.svg";
import { connect, useSelector, useDispatch } from "react-redux";
import nested from "../../utils/nested";
import { DEADLINE_SUBMIT_ON } from "../../store/value";

const GroupInfo = ({ getDeadline }) => {
  const { deadline, group, auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (group !== false) {
      getDeadline();
    }
  }, [group]);

  // const countDown = (countDownDate) => {
  //   // Get today's date and time
  //   var now = new Date().getTime();

  //   // Find the distance between now and the count down date
  //   var distance = countDownDate - now;

  //   // Time calculations for days, hours, minutes and seconds
  //   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //   var hours = Math.floor(
  //     (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //   );
  //   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //   // Display the result in the element with id="demo"
  //   document.getElementById("demo").innerHTML =
  //     days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  //   // If the count down is finished, write some text
  //   if (distance < 0) {
  //     clearInterval(x);
  //     document.getElementById("demo").innerHTML = "EXPIRED";
  //   }
  // };

  const ktra = (files) => {
    if (!files) return false;
    const file = files.filter((f) => {
      return f.from === auth.id;
    });
    if (file.length > 0) {
      return file[0];
    } else return false;
  };

  const RenderTH = ({ d }) => {
    const ok = ktra(d.files);

    return ok ? (
      <button className="group-page-home-main-right__deadline__info__done">
        <a href={ok.fileUrl}>
          <FileIcon />
        </a>
        <div>{ok.fileName}</div>
      </button>
    ) : new Date(d.timeEnd).getTime() < Date.now() ? (
      <button className="group-page-home-main-right__deadline__info__cant">
        you failed
      </button>
    ) : (
      <button
        className="group-page-home-main-right__deadline__info__can"
        onClick={() => {
          dispatch({ type: DEADLINE_SUBMIT_ON, payload: d._id });
        }}
      >
        submit
      </button>
    );
  };

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
        {deadline instanceof Array ? (
          deadline.map((d) => {
            return (
              <li className="group-page-home-decorate">
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
                  ) : (
                    <RenderTH d={d} />
                  )}
                </div>
              </li>
            );
          })
        ) : (
          <div />
        )}
        {/* <li className="group-page-home-decorate">
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
        </li> */}
      </ul>
    </div>
  );
};

export default connect(null, { getDeadline })(GroupInfo);
