"use client";
import { useEffect, useState } from "react";

const SERVER_URL = "http://localhost:5000";
export default function AttackPage() {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    const employeeData = await fetch(SERVER_URL + "/employees");

    setEmployees(await employeeData.json());
    print(employeeData);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div>
      <div className="p-5 justify-center items-center bg-white">
        <div className="grid grid-cols-5 ">
          <h1>Email</h1>
          <h1>Employee ID</h1>
          <h1>Name</h1>
          <h1>Phone #</h1>
          <h1>Position</h1>
        </div>
        {employees.map((employee) => {
          return (
            <div className="grid grid-cols-5">
              {Object.values(employee).map((property) => {
                if (property == employee._id) {
                  return <></>;
                }
                return <h1>{property}</h1>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
