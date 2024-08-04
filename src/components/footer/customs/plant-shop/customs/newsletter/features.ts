import useAxios from "@hooks/useAxios";
import { useAppDispatch } from "@hooks/useRedux";
import { setNotification } from "@redux/slices/notification";
import { useState } from "react";

const useNewsletterFeatures = () => {
    const [loading, setLoading] = useState(false)
   const axios = useAxios();
   const dispatch = useAppDispatch();

   const onSubmit = async (e: any) => {
      e.preventDefault();
      try {
         setLoading(true);
         const response = await axios({
            method: "POST",
            url: "/features/email-subscribe",
            data: { email: e.target[0].value },
         });

         dispatch(
            setNotification({
               type: "success",
               message: "Subscribed to newsletter successfully",
               description: response?.data?.extraMessage,
            }),
         );
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        
         dispatch(
            setNotification({
               type: "error",
               message: errorMessage,
               description: "Failed to subscribe to newsletter",
            }),
         );
      } finally {
         setLoading(false);
         e.target.reset();
      }
   };

   return { onSubmit, loading };
};

export default useNewsletterFeatures;
