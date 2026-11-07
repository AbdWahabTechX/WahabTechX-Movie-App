
import { useNavigate ,useRouteError, NavLink } from "react-router";
import "./Error.css";

export const ErrorPage = () => {

    const error = useRouteError();

    const navigate = useNavigate();

    console.log(navigate);

    const handleGobtn = () =>{
        navigate(-1);
    }

    return (
        <div className="error-container">

            <div className="error-box">

                <div className="error-icon">
                    <span>!</span>
                </div>

                <div className="parag">
                    <h1>404</h1>
                    <h2>Oops! Page Not Found</h2>

                    <p>
                        Sorry! The page you are looking for
                        doesn't exist or has been moved.
                    </p>
                </div>

                {/* <div className="return-link">
                    <NavLink to="/home">
                        <span>←</span> Return to Home
                    </NavLink>
                </div> */}

                <div className="go-back">
                    <button onClick={handleGobtn}>
                      <span>←</span>  Go back
                    </button>
                </div>

                <div className="error-footer">
                    <p>WAHABTECHX | React Router</p>
                </div>

            </div>

        </div>
    );
};
