import { isRouteErrorResponse, useRouteError } from "react-router-dom";

// import PageContent from "../components/PageContent"
// import MainNavigation from "../components/MainNavigation";

// const ErrorPage:React.ReactNode = () => {
//     const error = useRouteError();
    
//     let title:string = 'Error';
//     let message:string = 'Something wrong'
//     if(isRouteErrorResponse(error)){
//         if (error.status === 500){
//             message = error.data.message
//         }
    
//         if (error.status === 404) {
//             title = 'Not found!'
//             message = 'Could not find resource or page'
//         }
//     }

//     return (
//         <>
//             <h1>{title}</h1>
//             <p>{message}</p>
//         </>
//     );
// }

export default function ErrorPage(){
    const error = useRouteError();
    
    let title:string = 'Error';
    let message:string = 'Something wrong'
    if(isRouteErrorResponse(error)){
        if (error.status === 500){
            message = error.data.message
        }
    
        if (error.status === 404) {
            title = 'Not found!'
            message = 'Could not find resource or page'
        }
    }

    return (
        <>
            <h1>{title}</h1>
            <p>{message}</p>
        </>
    );
}