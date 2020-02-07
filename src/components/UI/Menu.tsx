import React, { useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../_helpers";

interface IProps {
  // name: string;
}

type UsePersistHook = (
  key: string,
  initialValue: boolean
) => [boolean, () => void];

const usePersistState: UsePersistHook = (key, initialValue) => {
  const storageValue = localStorage.getItem(key);

  const df = storageValue ?? initialValue;
  const [menuState, setMenuState] = useState<boolean>(Boolean(df));

  // useEffect(() => {
  //   localStorage.setItem(key, JSON.stringify(menuState));
  //   console.log(menuState);
  // }, [key, menuState]);

  const toggle = () =>
    setMenuState(prevState => {
      const newState = !prevState;
      localStorage.setItem(key, JSON.stringify(newState));
      return newState;
    });

  return [menuState, toggle];
};

export const Menu: React.FunctionComponent<IProps> = props => {
  const [menuState, setMenuState] = usePersistState("menuState", false);
  const [on, toggle] = usePersistState("menuState", false);

  if (menuState) {
    // console.log("Is menu open?", menuState);
    return (
      <div className="navbar">
        <div className="navigation">
          <Link to={routes.Home}>Home</Link>
          <Link to={routes.Login}>Login</Link>
          <Link to={routes.Register}>Register</Link>
          <Link to={routes.Admin}>Admin</Link>
          <Link to={routes.Login}>Logout</Link>
        </div>
        <div className="close">
          <button onClick={toggle}>{on ? "Aan" : "Uit"}</button>
        </div>
      </div>
    );
  } else {
    // console.log("Is menu open?", menuState);
    return <button onClick={toggle}>{on ? "Aan" : "Uit"}</button>;
  }
};

export default Menu;
