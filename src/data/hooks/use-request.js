import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IDLE, PENDING, REJECTED, selectRequestStatus } from "../entities/request/sliсe.js";

export const requestText = (status) => {
  if (status === PENDING || status === IDLE) {
    return "загрузка...";
  }
  if (status === REJECTED) {
    return "ошибка загрузки";
  }
  return "";
};

export const useRequest = (thunk, params) => {
  const [request, setRequest] = useState(null);

  const requestStatus = useSelector((state) =>
    selectRequestStatus(state, request?.requestId));

  const dispatch = useDispatch();

  useEffect(() => {
    const request = dispatch(thunk(params));
    setRequest(request);

    return () => {
      setRequest(null);
      request.abort();
    };
  }, []);

  return requestStatus;
};