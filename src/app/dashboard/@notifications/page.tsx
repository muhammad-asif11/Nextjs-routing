import Card from "@/app/components/card";
import Link from "next/link";
import React from "react";

const Notifications = () => {
  return (
    <Card>
      <h2>Notification</h2>
      <Link href="/dashboard/archived" className="text-blue-700">
        Archived
      </Link>
    </Card>
  );
};

export default Notifications;
