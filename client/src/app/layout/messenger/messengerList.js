import React from "react";
import { useSelector, connect } from "react-redux";
import { getListMessage } from "../../store/actions";

const MessengerList = ({ getListMessage, setChatBox }) => {
  const chatBox = useSelector((state) =>
    state.auth.id !== "" ? state.auth.user.chatBox : []
  );

  return (
    <div className="messenger-list">
      <ul className="messenger-list-ul">
        {chatBox.map((c) => {
          return (
            <li
              className="messenger-list-ul-detail"
              onClick={() => {
                setChatBox({
                  active: true,
                  data: c,
                });
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
                <div className="messenger-list-ul-detail__text__noti">
                  {c.noti}
                </div>
              </div>
            </li>
          );
        })}

        {/* <li className="messenger-list-ul-detail">
          <div className="messenger-list-ul-detail__img">
            <img
              className="messenger-list-ul-detail__img__avatar"
              alt=""
              src="https://scontent.fhan5-4.fna.fbcdn.net/v/t1.0-1/cp0/p60x60/66111015_1157307787810037_1787276191267291136_n.jpg?_nc_cat=104&_nc_sid=7206a8&_nc_ohc=VKzr0R24CsYAX_pj0GE&_nc_ht=scontent.fhan5-4.fna&oh=b297577a8ec041cb19bdef6fd7d4f690&oe=5F6B9E06"
            />
            <div className="messenger-list-ul-detail__img__online"></div>
          </div>
          <div className="messenger-list-ul-detail__text">
            <div className="messenger-list-ul-detail__text__name">
              Chánh Chung
            </div>
            <div className="messenger-list-ul-detail__text__noti">
              Chánh Chung send you a file
            </div>
          </div>
        </li>
        <li className="messenger-list-ul-detail">
          <div className="messenger-list-ul-detail__img">
            <img
              className="messenger-list-ul-detail__img__avatar"
              alt=""
              src="https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.0-1/cp0/p60x60/67872057_576277772903920_6517321363659685888_o.jpg?_nc_cat=102&_nc_sid=7206a8&_nc_ohc=F_lWlZyODSYAX9FYoSN&_nc_ht=scontent.fsgn5-4.fna&oh=b4e8b6d52e4086f8640b9fa4b15c6964&oe=5F6AA265"
            />
          </div>
          <div className="messenger-list-ul-detail__text">
            <div className="messenger-list-ul-detail__text__name">
              Ngô Thị Yên
            </div>
            <div className="messenger-list-ul-detail__text__noti">
              Hello what are you doing - 1min
            </div>
          </div>
        </li>
        <li className="messenger-list-ul-detail">
          <div className="messenger-list-ul-detail__img">
            <img
              className="messenger-list-ul-detail__img__avatar"
              alt=""
              src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-1/cp0/p60x60/107993250_2659013127713040_3164776985268191129_o.jpg?_nc_cat=104&_nc_sid=7206a8&_nc_ohc=SPi-D269v7AAX_u0dJb&_nc_ht=scontent-hkt1-1.xx&oh=a0503622480cd403f05bac584c7233bc&oe=5F6B5882"
            />
            <div className="messenger-list-ul-detail__img__online"></div>
          </div>
          <div className="messenger-list-ul-detail__text">
            <div className="messenger-list-ul-detail__text__name">
              Hai Nguyen Thanh
            </div>
            <div className="messenger-list-ul-detail__text__noti">
              em vừa thêm 1 môn được 6.5 nữa
            </div>
          </div>
        </li>
        <li className="messenger-list-ul-detail">
          <div className="messenger-list-ul-detail__img">
            <img
              className="messenger-list-ul-detail__img__avatar"
              alt=""
              src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-1/cp0/p60x60/67320478_2376518545759224_8610417656106844160_o.jpg?_nc_cat=106&_nc_sid=7206a8&_nc_ohc=NDUrBlafF2wAX-UDC7v&_nc_ht=scontent-hkt1-1.xx&oh=bb2754a3d180c73be15fa285035386f0&oe=5F6BBD2C"
            />
            <div className="messenger-list-ul-detail__img__online"></div>
          </div>
          <div className="messenger-list-ul-detail__text">
            <div className="messenger-list-ul-detail__text__name">
              Anh Duc Hoang
            </div>
            <div className="messenger-list-ul-detail__text__noti">
              ừ làm xong thì về luôn đi
            </div>
          </div>
        </li>
        <li className="messenger-list-ul-detail">
          <div className="messenger-list-ul-detail__img">
            <img
              className="messenger-list-ul-detail__img__avatar"
              alt=""
              src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-1/cp0/p60x60/106675180_10158817370333463_5295525700225980885_n.jpg?_nc_cat=1&_nc_sid=1eb0c7&_nc_ohc=m9vcjLslZSsAX-cFrGE&_nc_ht=scontent.fsgn5-2.fna&oh=b2c1cec867475ef5c4310e408f1ef95e&oe=5F6AD7ED"
            />
            <div className="messenger-list-ul-detail__img__online"></div>
          </div>
          <div className="messenger-list-ul-detail__text">
            <div className="messenger-list-ul-detail__text__name">NBA</div>
            <div className="messenger-list-ul-detail__text__noti">
              Hello! I'm the NBA chatbot and I'm walking to the scorer's table
              and checking in! Start by asking for some of your favorite videos
              ("dunks" maybe?) or click the tutorial button to see my full skill
              set.
            </div>
          </div>
        </li>
        <li className="messenger-list-ul-detail">
          <div className="messenger-list-ul-detail__img">
            <img
              className="messenger-list-ul-detail__img__avatar"
              alt=""
              src="https://scontent.fhan5-4.fna.fbcdn.net/v/t1.0-1/cp0/p60x60/66111015_1157307787810037_1787276191267291136_n.jpg?_nc_cat=104&_nc_sid=7206a8&_nc_ohc=VKzr0R24CsYAX_pj0GE&_nc_ht=scontent.fhan5-4.fna&oh=b297577a8ec041cb19bdef6fd7d4f690&oe=5F6B9E06"
            />
            <div className="messenger-list-ul-detail__img__online"></div>
          </div>
          <div className="messenger-list-ul-detail__text">
            <div className="messenger-list-ul-detail__text__name">
              Chánh Chung
            </div>
            <div className="messenger-list-ul-detail__text__noti">
              Chánh Chung send you a file
            </div>
          </div>
        </li>
        <li className="messenger-list-ul-detail">
          <div className="messenger-list-ul-detail__img">
            <img
              className="messenger-list-ul-detail__img__avatar"
              alt=""
              src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-1/cp0/p60x60/24131156_972116859612424_3626876820871263703_n.jpg?_nc_cat=102&_nc_sid=7206a8&_nc_ohc=5QddkTIaZh8AX9gT3zC&_nc_ht=scontent-hkt1-1.xx&oh=bf9965f7806bf24637cf6804637bb55f&oe=5F68E5E4"
            />
            <div className="messenger-list-ul-detail__img__online"></div>
          </div>
          <div className="messenger-list-ul-detail__text">
            <div className="messenger-list-ul-detail__text__name">
              Bình Nguyễn
            </div>
            <div className="messenger-list-ul-detail__text__noti">
              Nấu cơm đi tôi mang đồ ăn lên
            </div>
          </div>
        </li>
        <li className="messenger-list-ul-detail">
          <div className="messenger-list-ul-detail__img">
            <img
              className="messenger-list-ul-detail__img__avatar"
              alt=""
              src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-1/cp0/p60x60/118085822_1845962855542186_1520350068694639705_n.jpg?_nc_cat=110&_nc_sid=7206a8&_nc_ohc=wqh8NAXHNhMAX-cbfZ7&_nc_ht=scontent.fsgn5-3.fna&oh=1f38245d58617a5bec35b80fd4c7306f&oe=5F6C2520"
            />
            <div className="messenger-list-ul-detail__img__online"></div>
          </div>
          <div className="messenger-list-ul-detail__text">
            <div className="messenger-list-ul-detail__text__name">
              Hoàng Lê Văn
            </div>
            <div className="messenger-list-ul-detail__text__noti">
              ôi, vậy em gửi anh link zoom với
            </div>
          </div>
        </li>
        <li className="messenger-list-ul-detail">
          <div className="messenger-list-ul-detail__img">
            <img
              className="messenger-list-ul-detail__img__avatar"
              alt=""
              src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-1/cp0/p60x60/105286696_3223680747856519_6840687568711217777_n.jpg?_nc_cat=101&_nc_sid=7206a8&_nc_ohc=y96WrAnUp7gAX_AHKWy&_nc_ht=scontent-hkt1-1.xx&oh=d67e8892b3ceb664e128fcf0320d14c4&oe=5F69ECCF"
            />
            <div className="messenger-list-ul-detail__img__online"></div>
          </div>
          <div className="messenger-list-ul-detail__text">
            <div className="messenger-list-ul-detail__text__name">Tôn Bửu</div>
            <div className="messenger-list-ul-detail__text__noti">
              chúc ông bữa trưa vui vẻ
            </div>
          </div>
        </li>
        <li className="messenger-list-ul-detail">
          <div className="messenger-list-ul-detail__img">
            <img
              className="messenger-list-ul-detail__img__avatar"
              alt=""
              src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-1/cp0/p60x60/74965416_2602107036685799_7781481069533986816_o.jpg?_nc_cat=108&_nc_sid=7206a8&_nc_ohc=ussR38Q24hEAX-OjgzK&_nc_ht=scontent-hkt1-1.xx&oh=a553147035584cadc45ece2a93a78121&oe=5F6C23AE"
            />
            <div className="messenger-list-ul-detail__img__online"></div>
          </div>
          <div className="messenger-list-ul-detail__text">
            <div className="messenger-list-ul-detail__text__name">
              Trung Hoang
            </div>
            <div className="messenger-list-ul-detail__text__noti">
              chú coi trailer này chưa
            </div>
          </div>
        </li>
        <li className="messenger-list-ul-detail">
          <div className="messenger-list-ul-detail__img">
            <img
              className="messenger-list-ul-detail__img__avatar"
              alt=""
              src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-1/cp0/p60x60/87454385_1227620667434309_1272339045887770624_o.jpg?_nc_cat=110&_nc_sid=7206a8&_nc_ohc=S_jnrU9FsncAX9jL7wl&_nc_ht=scontent-hkt1-1.xx&oh=e9f2b904010fd0d6472e1e9a8f1a2fb2&oe=5F6A2503"
            />
            <div className="messenger-list-ul-detail__img__online"></div>
          </div>
          <div className="messenger-list-ul-detail__text">
            <div className="messenger-list-ul-detail__text__name">
              Nguyễn Gia Hy
            </div>
            <div className="messenger-list-ul-detail__text__noti">
              udemy free nè buddy, thích cái nào lấy cái đó mày
            </div>
          </div>
        </li>
        <li className="messenger-list-ul-detail">
          <div className="messenger-list-ul-detail__img">
            <img
              className="messenger-list-ul-detail__img__avatar"
              alt=""
              src="https://scontent.fhan5-4.fna.fbcdn.net/v/t1.0-1/cp0/p60x60/66111015_1157307787810037_1787276191267291136_n.jpg?_nc_cat=104&_nc_sid=7206a8&_nc_ohc=VKzr0R24CsYAX_pj0GE&_nc_ht=scontent.fhan5-4.fna&oh=b297577a8ec041cb19bdef6fd7d4f690&oe=5F6B9E06"
            />
            <div className="messenger-list-ul-detail__img__online"></div>
          </div>
          <div className="messenger-list-ul-detail__text">
            <div className="messenger-list-ul-detail__text__name">
              Chánh Chung
            </div>
            <div className="messenger-list-ul-detail__text__noti">
              Chánh Chung send you a file
            </div>
          </div>
        </li> */}
      </ul>
    </div>
  );
};

export default connect(null, { getListMessage })(MessengerList);
