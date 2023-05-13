import { toast } from 'react-toastify';

const useNotification = () => {
  const notify = (message, options = {}) => toast.info(message, options);

  return {
    notify
  }
}

export default useNotification