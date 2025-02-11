import { useEffect } from "react"
import { useNavigate } from "react-router";

const Delete = () => {
    const navigate = useNavigate();
    useEffect(()=> {
        navigate('/dashboard/users')
    }, [navigate])

    return <>
    </>
}

export default Delete;