import { useState } from "react";

const useWebHookUrl = () => {

    
    const [url, setUrl] = useState("");
    const [confirm, setConfirm] = useState<boolean>(false);
    
    const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(e.target.value);
        setConfirm(false);
    };
    
    const handleConfirm = () => {
        setConfirm(true);
    };
    
    const handleNotifySim = () => {
        fetch(url, {
            method: "POST",
            body: "NOTIFICA!",
        });
    };

    return {handleUrlChange, handleConfirm, handleNotifySim, confirm, url}
}

export default useWebHookUrl;