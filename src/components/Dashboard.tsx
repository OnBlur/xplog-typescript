import React from "react";
import { useTypedSelector } from "../store/_reducers";

import Entry from "./Entry/Entry";
import { RouteComponentProps } from "react-router-dom";

interface IProps {
  // name: string;
}

// interface IRouteParams {
//   id: string;
// }

// export const Dashboard: React.FunctionComponent<RouteComponentProps<IRouteParams>> = props => {
export const Dashboard: React.FunctionComponent<RouteComponentProps> = props => {
  const entries = useTypedSelector(state => state.entries.entries);
  // props.match.params.id

  const toEntry = () => {
    props.history.push("/entry");
  };

  return (
    <div className="dashboard">
      {/* Header */}
      <div className="header">
        <div className="left">
          <h1>Mijn XPLOG</h1>
        </div>
        <div className="right">
          <div className="filter">
            <div className="tag">Nieuw</div>
            <div className="tag">Dag</div>
            <div className="tag active">Week</div>
            <div className="tag">Maand</div>
          </div>
          <div className="nav">
            <div className="ball"></div>
            <div className="ball"></div>
            <div className="ball active"></div>
            <div className="ball"></div>
          </div>
        </div>
      </div>
      {/* Entries */}
      <div className="entries">
        {entries.map(entry => (
          <Entry
            key={entry.id}
            id={entry.id}
            title={entry.title}
            body={entry.body}
            date={entry.date}
            userId={entry.id}
          />
        ))}
        <div className="entry-wrapper" onClick={() => toEntry()}>
          <div className="date">.</div>
          <div className="entry new">
            <div className="add-icon">
              <div className="plus">+</div>
            </div>
            <div className="add-text">Add new</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
