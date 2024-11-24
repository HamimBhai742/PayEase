import React from "react";

const TableBody = ({ user, handleApprovedBtn }) => {
  console.log(user);
  return (
    <tr className="hover:bg-gray-100">
      <td className="px-6 py-4 text-gray-700 text-sm">{user.name}</td>
      <td className="px-6 py-4 text-gray-700 text-sm">{user.email}</td>
      <td className="text-center px-2">
        <p
          className={
            user.status === "Pending"
              ? "text-sm font-medium bg-rose-100 px-3 rounded-full py-1 text-rose-500"
              : "text-sm font-medium bg-green-100 px-3 rounded-full py-1 text-green-500"
          }
        >
          {user.status}
        </p>
      </td>
      <td className="text-center px-2">
        <p
          className={
            user.role === "user"
              ? "text-sm font-medium bg-teal-100 px-3 rounded-full py-1 text-teal-500"
              : "text-sm font-medium bg-blue-100 px-3 rounded-full py-1 text-blue-500"
          }
        >
          {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
        </p>
      </td>
      <td className="border border-gray-300 px-4 py-2 border-none">
        <select
          onChange={(e) => handleApprovedBtn(user?._id, e.target.value)}
          defaultValue={user.status}
          className="border border-none outline-none px-2 py-1"
        >
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
        </select>
      </td>
    </tr>
  );
};

export default TableBody;
