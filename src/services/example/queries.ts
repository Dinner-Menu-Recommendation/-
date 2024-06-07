import { useQuery } from "@tanstack/react-query";
import QUERY_KEYS from "../../constants/queryKeys";
import exampleAPI from "./api";

const useGetExample = () => {
  const { data } = useQuery({
    queryKey: [QUERY_KEYS.example.all()],
    queryFn: () => exampleAPI.example(),
  });

  return { data };
};

export { useGetExample };
