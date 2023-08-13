// import { ToastContainer, toast } from 'react-toastify';
import toast from 'react-hot-toast';
import { MdDeleteOutline } from 'react-icons/md';



export const SuccessToast = (message) => {
 
 return toast.success(message, {
        style: {
            padding: "16px",
        },
    });
};

export const ErrorToast = (message) => {
    return toast.error(message, {
        style: {
            padding: "16px",
        },
    }); 
};
export const  RemoveToast = (message) => {
    toast.remove();
    toast.success(message, {
      icon: <MdDeleteOutline value={{ color: 'red',backgroundColor:"red", size: '50px' }} />, 
    });
  };