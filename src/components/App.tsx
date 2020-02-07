import React from "react";
import Menu from "./UI/Menu";

interface IProps {
  // name: string;
}

export const App: React.FunctionComponent<IProps> = props => {
  return (
    <div className="wrapper">
      <Menu />
      <div className="row">{props.children}</div>
    </div>
  );
};

export default App;
