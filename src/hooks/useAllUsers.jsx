import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useSecureAxios";
const useAllUser = () => {
  const axiosSucre = useAxiosSecure();
  const { data: allUsers } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const { data } = await axiosSucre.get("/all-users-pending");
      return data;
    },
  });
  return [allUsers];
};
export default useAllUser;
