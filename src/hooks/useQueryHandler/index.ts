import { useQuery, QueryKey } from '@tanstack/react-query';

interface QueryHandlerProps {
  queryKey: QueryKey;
  queryFn: () => any;
  onError?: (err: Error) => void;
  options?: object;
  retry?: number;
  onSuccess?: () => void;
  enabled?: any
}

const useQueryHandler = ({
  queryKey,
  queryFn,
  options = {},
}: QueryHandlerProps) => {
  const queryRequest = useQuery({
    queryKey,
    queryFn,
    ...{
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      ...options,
    },
  });

  return { ...queryRequest };
};

export default useQueryHandler;
