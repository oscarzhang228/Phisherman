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

type Employee = {
  name: string;
  emp_id: string;
  phone: string;
  email: string;
  position: string;
};

const employee: Employee = {
  name: "James Wang",
  emp_id: "12",
  phone: "4712678565",
  email: "jameswang@mcdonalds.com",
  position: "fry cook",
};

const SERVER_URL = "http://localhost:5000";
export default function Dashboard() {
  const [employees, setEmployees] = useState<Employee[]>([
    employee,
    employee,
    employee,
  ]);

  const [selectedEmployeeIdx, setSelectedEmployeeIdx] = useState<number>(0);
  const fetchEmployees = async () => {
    const employeeData = await fetch(SERVER_URL + "/employees");

    // setEmployees(await employeeData.json());
  };
  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="bg-[#0a0a0a] px-[8rem] py-5 min-h-screen overflow-hidden max-w-screen">
      <Table className="min-w-full divide-y divide-gray-200">
        <TableHeader className=" bg-gray-50">
          <TableRow className="text-white">
            {Object.keys(employee).map((empKey) => {
              return (
                <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {empKey}
                </TableHead>
              );
            })}
          </TableRow>
        </TableHeader>
        <TableBody className="bg-white divide-y divide-gray-200">
          {employees.map((employee, idx) => {
            return (
              <TableRow
                className={"font-[Space Grotesk] px-6 py-4 whitespace-nowrap" + }
                onClick={() => {
                  setSelectedEmployeeIdx(idx);
                }}
              >
                {Object.values(employee).map((empVal) => {
                  return (
                    <TableCell className={"font-[Space Grotesk] px-6 py-5"}>
                      {empVal}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
