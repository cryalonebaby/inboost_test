import { toast } from 'react-toastify';

const useNotification = () => {
  const notify = (message, options) => toast.info(message, { ...options, position: 'bottom-right' });

  return {
    notify
  }
}

export default useNotification