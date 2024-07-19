import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setThemeColor } from "../../stores/color/themeActions";
import store from "../../stores/color/store";
export default function Footer() {
  const RED = "#ff0000";
  const BLUE = "#0000ff";
  const GRAY = "#678c89";

  const dispatch = useDispatch();
  const themeColor = useSelector((state) => state.theme.color);

  const submitThemeColor = (color) => {
    dispatch(setThemeColor(color));
  };

  store.subscribe(() => {
    const state = store.getState();
    const newThemeColor = state.theme.color;
    document.documentElement.style.setProperty('--main-color', newThemeColor);
    console.log("Footer: " + JSON.stringify(state));
  });

  return (
    <div className="footer">
      <div className="vertical-center">
        <span>Choose Theme </span>
        <button onClick={() => submitThemeColor(RED)} className="dot red" />

        <button onClick={() => submitThemeColor(BLUE)} className="dot blue" />

        <button onClick={() => submitThemeColor(GRAY)} className="dot gray" />
      </div>
    </div>
  );
}
