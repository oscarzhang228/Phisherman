import React from "react";
import SearchBar from "./SearchBar";
import EmployeeCard from "./EmployeeCard";
import { Employee } from "./types";

const employees: Employee[] = [
  {
    emp_id: "EMP001",
    name: "Alex Thompson",
    phone: "+1 (555) 123-4567",
    email: "alex.thompson@company.com",
    position: "Software Engineer",
    manager_email: "tech.lead@company.com",
  },
  {
    emp_id: "EMP002",
    name: "Sarah Chen",
    phone: "+1 (555) 234-5678",
    email: "sarah.chen@company.com",
    position: "UX Designer",
    manager_email: "design.head@company.com",
  },
  {
    emp_id: "EMP003",
    name: "Marcus Rodriguez",
    phone: "+1 (555) 345-6789",
    email: "marcus.rodriguez@company.com",
    position: "Product manager_email",
    manager_email: "product.director@company.com",
  },
];

const EmployeeSelectionPage: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] font-[Poppins] text-white px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text">
            Phisherman
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              Select your target
            </h1>
            <p className="text-gray-400 text-center text-lg">
              Choose an employee to run a phishing awareness test
            </p>
          </div>
          <SearchBar />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {employees.map((employee) => (
              <EmployeeCard key={employee.emp_id} employee={employee} />
            ))}
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default EmployeeSelectionPage;
