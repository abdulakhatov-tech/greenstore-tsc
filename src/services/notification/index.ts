import useAxios from "@hooks/useAxios";
import { useMutation } from "@tanstack/react-query";
import { useNotification } from "@tools/notification/notification";

const useNotificationService = () => {
    const axios = useAxios();
    const dispatchNotification = useNotification()

    const sendInvitation = useMutation({
        mutationFn: async (authorId: string) => {
            const response = await axios({
                url: '/user/notification/invite',
                method: 'POST',
                data: {
                    _id: authorId
                }
            })

            return response.data;
        },
        onSuccess: () => {
            dispatchNotification({
                type: 'success',
                message: 'Invitation sent successfully',
                description: 'Your invitation was sent successfully'
            })
        },
        onError: () => {
            dispatchNotification({
                type: 'error',
                message: 'Failed to send invitation',
                description: 'Failed to send invitation. Please try again later'
            })
        }
    })

  return { sendInvitation: sendInvitation.mutate };
};

export default useNotificationService;
