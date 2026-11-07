import { Outlet, useNavigation } from "react-router"
import { Footer } from "./Footer"
import { HeaderSection } from "./Header"
import { LoadingPage } from "./Loading";

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