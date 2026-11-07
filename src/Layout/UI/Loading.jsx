import "./Loading.css";

export const LoadingPage = () => {
    return (
        <div className="loading-container">
            <div className="loader"></div>
            <h2>Loading Movies...</h2>
            <p>Please wait while we fetch your movies.</p>
        </div>
    );
};