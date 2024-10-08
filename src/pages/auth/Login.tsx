import { GoogleLogin } from "@react-oauth/google"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Login = () => {
    const navigate = useNavigate();

    const handleSuccess = (response: any) => {
        localStorage.setItem('login-credential', response?.credential)
        toast.success('Login successfully');
        navigate('/main');
    };

    const handleError = () => {
        toast.error('Login unsuccessfully');
    };


    return (
        <div className="flex items-center justify-center h-full">
            <div className="flex flex-col gap-6">
                <h4 className="text-2xl font-medium">Welcome to Invoice Application</h4>

                <GoogleLogin
                    onSuccess={handleSuccess}
                    onError={handleError}
                />
            </div>
        </div>
    )
}

export default Login;