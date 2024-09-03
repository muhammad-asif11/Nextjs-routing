import React from "react";

const DashboardLayout = ({
  children,
  users,
  revenue,
  notifications,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) => {
  return (
    <>
      {children}
      <div className="flex">
        <div className="grid">
          <div>{users}</div>
          <div>{revenue} </div>
        </div>
        <div className="flex flex-1">{notifications} </div>
      </div>
    </>
  );
};

export default DashboardLayout;
