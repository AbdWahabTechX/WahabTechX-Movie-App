import { Outlet, useNavigation } from "react-router"
import { HeaderSection } from "./Header"
import { LoadingPage } from "./Loading";
import { Footer } from "./Footer";
import { Home } from "../../HomePage";

export const AppLayout = () => {

    const navigation = useNavigation();
    console.log(navigation);


    if(navigation.state === "loading"){
        return <LoadingPage />
    }
    return(
        <>
        <HeaderSection />
        <Outlet />
        <Footer />
        </>
    )
}