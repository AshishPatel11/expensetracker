import { useNavigate } from 'react-router-dom'
import Alert from './Alert'

const LoginAuth = () => {
    const navigate = useNavigate()

    let UserSession = JSON.parse(localStorage.getItem("user"));

    const clickEvent = () => {
        navigate("/");
    }
    return (
        <>
            {!UserSession && <Alert message="Please Login First!!" func={clickEvent} />}
        </>
    )
}

export default LoginAuth