import toast from "react-hot-toast";

export const errorMessage = (message: string) =>
  toast.error(message, { duration: 3000 });
