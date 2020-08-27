import React, { useEffect, useState } from "react";

import { ReactComponent as FileIcon } from "../../asset/img/icon/file.svg";
import { useSelector, useDispatch } from "react-redux";
import { DEADLINE_SUBMIT_ON } from "../../store/value";

const DeadLineButton = ({ deadline }) => {
  const [submit, setSubmit] = useState(false);
  const { id } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(deadline.files.length);
    if (!deadline.files) return false;
    const file = deadline.files.filter((f) => {
      return f.from === id;
    });
    if (file.length > 0) {
      return setSubmit(file[0]);
    } else return setSubmit(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deadline.files.length]);

  return submit ? (
    <button className="group-page-home-main-right__deadline__info__done">
      <a href={submit.fileUrl}>
        <FileIcon />
      </a>
      <div>{submit.fileName}</div>
    </button>
  ) : new Date(deadline.timeEnd).getTime() < Date.now() ? (
    <button className="group-page-home-main-right__deadline__info__cant">
      you failed
    </button>
  ) : (
    <button
      className="group-page-home-main-right__deadline__info__can"
      onClick={() => {
        dispatch({ type: DEADLINE_SUBMIT_ON, payload: deadline._id });
      }}
    >
      submit
    </button>
  );
};

export default DeadLineButton;
