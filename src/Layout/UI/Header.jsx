    import { NavLink } from "react-router"
    import "./Header.css"
    export const HeaderSection = () =>{

        const getingStyle = ({isActive}) =>{
            return{
                color: isActive ? "blue": "white",
            }
        }


        return(
            <header className="header-sec">
                <div className="signloginsec">
                    <div className="par">
                        <p>Welcome in the world of React Router.</p>
                    </div>
                    <div className="login-signup">
                        <div className="log-in"><a href="#"></a>LOGIN</div>
                        <div className="log-in"><a href="#"></a>SIGN UP</div>
                    </div>
                </div>
                <div className="nab-bar">
                    <div className="logo">
                        <h2 className="logo">WAHABTECHX</h2>
                    </div>
                    <div className="nav-links">
                    <nav>
                        <NavLink to="/home" style={getingStyle}>
                            Home
                        </NavLink>

                        <NavLink to="/about" style={getingStyle}>
                            About
                        </NavLink>

                        <NavLink to="/movie" style={getingStyle}>
                            Movie
                        </NavLink>

                        <NavLink to="/contact" style={getingStyle}>
                            Contact
                        </NavLink>
                    </nav>
                </div>
                </div>
            </header>
        )
    }