import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Notify = (text, type) => {
    if (type === "success") {
        return toast.success(text, {
            theme: "colored"
        });
        
    } else if(type === "change") {
        return toast.info(text, {
            theme: "colored"
        });
    }else {
        return toast.error(text, {
            theme: "colored"
        });
    }
}
 
export default Notify;

