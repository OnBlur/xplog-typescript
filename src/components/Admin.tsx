import React from "react";

interface IProps {
  // name: string;
}

export const Admin: React.FunctionComponent<IProps> = props => {
  return (
    <div className="dashboard">
      <h2>New user</h2>
      <h3>All registered users:</h3>
    </div>
  );
};

export default Admin;
