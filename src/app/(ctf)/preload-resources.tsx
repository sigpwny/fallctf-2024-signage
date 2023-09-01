'use client'

import ReactDOM from "react-dom";

export default function PreloadResources() {
  ReactDOM.preload("/fonts/HelveticaNeue-Bold.otf", { as: "font", crossOrigin: "anonymous" });
  return null;
}