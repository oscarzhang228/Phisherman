import React from "react";

interface NotificationItemProps {
  type: "warning" | "danger";
  title: string;
  time: string;
}

export const NotificationItem: React.FC<NotificationItemProps> = ({
  type,
  title,
  time,
}) => {
  const colorClasses = {
    warning: "bg-yellow-500 text-yellow-500",
    danger: "bg-red-500 text-red-500",
  };

  return (
    <div className="p-4 rounded-lg bg-black/30 backdrop-blur-lg border border-white/5 flex items-center space-x-4">
      {/* Colored Dot */}
      <div
        className={`w-4 h-4 rounded-full ${colorClasses[type].split(" ")[0]} ${
          type === "danger" ? "animate-ping" : "animate-pulse"
        }`}
      />
      {/* Title & Time */}
      <div className="flex flex-col flex-grow">
        <div className={`font-medium ${colorClasses[type].split(" ")[1]}`}>
          {title}
        </div>
        <div className="text-sm text-white/50">{time}</div>
      </div>
    </div>
  );
};
