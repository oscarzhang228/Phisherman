import React from "react";
import { Employee } from "./types";

interface EmployeeCardProps {
  employee: Employee;
  onCampaignLaunch: (employee_id: string) => void;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({
  employee,
  onCampaignLaunch,
}) => {
  return (
    <div className="group bg-[#151515] rounded-xl p-6 border-2 border-transparent hover:border-orange-500/30 transition-all duration-300">
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-xl text-white group-hover:text-orange-500 transition-colors">
            {employee.name}
          </h3>
          <span className="bg-orange-500/10 rounded-full px-3 py-1 text-orange-500 text-sm">
            {employee.employee_id}
          </span>
        </div>
        <div className="mt-4 space-y-2">
          <p className="text-gray-400">📞 {employee.phone}</p>
          <p className="text-gray-400">📧 {employee.email}</p>
          <div className="inline-block mt-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg p-[1px]">
            <div className="px-3 py-1 bg-[#151515] rounded-xl">
              <p className="text-[#FFA53F]">{employee.position}</p>
            </div>
          </div>
          <p className="text-gray-400 mt-3">
            Manager: {employee.manager_email}
          </p>
        </div>
        <button
          onClick={() => onCampaignLaunch(employee.employee_id)}
          className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-xl hover:opacity-90 active:scale-95 transform transition-all duration-300 shadow-lg shadow-orange-500/20 font-medium"
        >
          Launch Campaign
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;
