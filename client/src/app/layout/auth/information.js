import React from "react";
import { Field, reduxForm } from "redux-form";

const Information = ({ handleSubmit }) => {
  const tinh = [
    "Hà Nội",
    "Hồ Chí Minh",
    "Đắk Lắk",
    "Hà Tĩnh",
    "Điện Biên",
    "Nghệ An",
    "Tiền Giang",
    "Hải Phòng",
    "An Giang",
    "Bà Rịa - Vũng Tàu",
    "Bắc Giang",
    "Bắc Kạn",
    "Bạc Liêu",
    "Bắc Ninh",
    "Bến Tre",
    "Bình Định",
    "Bình Dương",
    "Bình Phước",
    "Bình Thuận",
    "Cà Mau",
    "Cao Bằng",
    "Đắk Nông",
    "Đồng Nai",
    "Đồng Tháp",
    "Gia Lai",
    "Hà Giang",
    "Hà Nam",
    "Hải Dương",
    "Hậu Giang",
    "Hòa Bình",
    "Hưng Yên",
    "Khánh Hòa",
    "Kiên Giang",
    "Kon Tum",
    "Lai Châu",
    "Lâm Đồng",
    "Lạng Sơn",
    "Lào Cai",
    "Long An",
    "Nam Định",
    "Ninh Bình",
    "Ninh Thuận",
    "Phú Thọ",
    "Quảng Bình",
    "Quảng Nam",
    "Quảng Ngãi",
    "Quảng Ninh",
    "Quảng Trị",
    "Sóc Trăng",
    "Sơn La",
    "Tây Ninh",
    "Thái Bình",
    "Thái Nguyên",
    "Thanh Hóa",
    "Thừa Thiên Huế",
    "Trà Vinh",
    "Tuyên Quang",
    "Vĩnh Long",
    "Vĩnh Phúc",
    "Yên Bái",
    "Phú Yên",
    "Cần Thơ",
    "Đà Nẵng",
  ];

  return (
    <section
      id="one"
      className="container-box main style2 right dark fullscreen"
    >
      <div className="content box style2">
        <header>
          <h2>Please give us some of your Information</h2>
        </header>

        <form onSubmit={handleSubmit} className="form-action">
          <Field
            name="fullName"
            component="input"
            placeholder="Full Name"
            type="text"
          ></Field>
          <Field
            name="phoneNumber"
            component="input"
            placeholder="Phone Number"
            type="text"
          ></Field>

          <div className="dropdown-selection-box">
            <div className="select">
              <span>Select Gender</span>
              <i className="fa fa-chevron-left"></i>
            </div>
            <Field component="input" type="hidden" name="gender" />
            <ul className="dropdown-selection-box-menu">
              <li id="male">Male</li>
              <li id="female">Female</li>
            </ul>
          </div>

          <div className="dropdown-selection-box util-margin-bottom-small">
            <div className="select">
              <span>Select Province</span>
              <i className="fa fa-chevron-left"></i>
            </div>
            <Field component="input" type="hidden" name="province" />
            <ul className="dropdown-selection-box-menu">
              {tinh.map((t, index) => {
                return (
                  <li key={t} id={t}>
                    {t}
                  </li>
                );
              })}
            </ul>
          </div>
          <a href="#two">
            <button className="button primary button-signup resize-button">
              Confirm
            </button>
          </a>
        </form>
      </div>
    </section>
  );
};

export default reduxForm({ form: "info" })(Information);
