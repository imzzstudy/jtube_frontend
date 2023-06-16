// import { Outlet, useNavigation } from "react-router-dom";
import { Outlet } from "react-router-dom";
// import MainNavigation from "../components/MainNavigation";


const RootLayout = () => {
    // const navigation = useNavigation()


    return (
        <>
            {/* <MainNavigation/> */} 
            <ul>
                <li>asd1</li>
                <li>asd2</li>
                <li>asd3</li>
            </ul>
            <main>
                {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
                <Outlet/>
            </main>
        </>
        
    )
};

export default RootLayout;