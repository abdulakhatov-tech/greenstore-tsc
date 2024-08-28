import { FormEvent, useState } from "react";

import useEmailSubscripition from "@services/email-subscription";

const useNewsletterFeatures = () => {
  const [loading, setLoading] = useState(false);
  const { subscribeToNewsletter } = useEmailSubscripition();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.target as HTMLFormElement).elements[0] as HTMLInputElement;

    setLoading(true);
    try {
      await subscribeToNewsletter({ email: email.value });
      email.value = ''
      
    } catch (error: any) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  };

  return { onSubmit, loading };
};

export default useNewsletterFeatures;
