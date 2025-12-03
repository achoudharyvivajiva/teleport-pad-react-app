import toast from "react-hot-toast";

export const errorMessage = (message: string) =>
  toast.error(message, { duration: 3000 });

export const rightSuccessMessage = (message: string) =>
  toast.success(message, { position: "top-right", duration: 2000 });
