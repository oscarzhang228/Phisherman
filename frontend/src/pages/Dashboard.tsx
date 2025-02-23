import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import SearchBar from "@/components/EmployeeSelection/SearchBar";
import EmployeeCard from "@/components/EmployeeSelection/EmployeeCard";
import { Link } from "react-router-dom";
import { Employee } from "@/components/EmployeeSelection/types";

const employee: Employee = {
  name: "James Wang",
  employee_id: "12",
  phone: "123-456-789",
  email: "jameswang@mcdonalds.com",
  position: "fry cook",
  manager_email: "email@gmail.com",
};

const employee2: Employee = {
  name: "Vic Wang",
  employee_id: "13",
  phone: "123-456-789",
  email: "vicwang@bking.com",
  position: "senior burger maker",
  manager_email: "email2@gmail.com",
};

const employee3: Employee = {
  name: "Oscar Zhang",
  employee_id: "14",
  phone: "123-456-789",
  email: "ozhang@wendys.com",
  position: "baconator taster",
  manager_email: "email3@gmail.com",
};

const SERVER_URL = "http://localhost:5000";
export default function Dashboard() {
  const [employees, setEmployees] = useState<Employee[]>([
    employee,
    employee2,
    employee3,
  ]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const fetchEmployees = async () => {
    const employeeData = await fetch(SERVER_URL + "/employees");

    setEmployees(await employeeData.json());
  };
  useEffect(() => {
    fetchEmployees();
  }, []);

  const matchedEmployees = employees.filter((employee) => {
    return (
      searchTerm === "" || employee.name.toLowerCase().includes(searchTerm)
    );
  });
  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] font-[Space Grotesk] text-white px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text">
            <Link to="/">Phisherman</Link>
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
          <SearchBar onChange={setSearchTerm} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {matchedEmployees.map((employee) => (
              <EmployeeCard key={employee.employee_id} employee={employee} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
