import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useSecureAxios";
import { FaSpinner } from "react-icons/fa";
import TableBody from "./TableBody";

const UserManagement = () => {
  const axiosSucre = useAxiosSecure();
  const { data: users, isPending } = useQuery({
    queryKey: ["all-users"],
    queryFn: async () => {
      const { data } = await axiosSucre.get("/all-users");
      return data;
    },
  });
  console.log(users);
  return (
    <div className="max-w-md mx-auto">
      <div className="flex w-full justify-between items-center bg-green-500 text-white px-3">
        <Link to="/">
          <FaArrowLeft className="text-2xl" />
        </Link>
        <h2 className="text-lg font-semibold ">User Management</h2>
        <figure>
          <img className="w-16" src="./logo.png" alt="" />
        </figure>
      </div>
      {isPending ? (
        <FaSpinner className="text-3xl to-green-500 animate-spin" />
      ) : (
        <div class="overflow-x-auto mt-5">
          <div class="w-full overflow-hidden overflow-x-auto bg-white">
            <table class="table-auto w-full">
              <thead class="bg-blue-500 text-white">
                <tr>
                  <th class="px-6 py-3 text-left text-sm font-medium">Name</th>
                  <th class="px-6 py-3 text-left text-sm font-medium">Email</th>
                  <th class="px-6 py-3 text-left text-sm font-medium">
                    Status
                  </th>
                  <th class="px-6 py-3 text-left text-sm font-medium">Role</th>
                  <th class="px-6 py-3 text-left text-sm font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <TableBody user={user} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
