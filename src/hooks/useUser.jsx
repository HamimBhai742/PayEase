import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useSecureAxios";
const useUser = () => {
  const axiosSucre = useAxiosSecure();
  const email = localStorage.getItem("email");
  const { data: user, isPending: loadingUser } = useQuery({
    queryKey: ["user", email],
    queryFn: async () => {
      const { data } = await axiosSucre.get(`/user/${email}`);
      return data;
    },
  });
  return [user, loadingUser];
};
export default useUser;
