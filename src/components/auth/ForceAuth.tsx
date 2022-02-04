import Image from "next/image";
import route from "next/router";
import useAuth from "../../service/hook/useAuth";

export default function ForceAuthentication(props: any) {

    const { user } = useAuth();

    function renderContent() {
        return (
            <>
                {props.children}
            </>
        )
    }

    function renderLoading() {
        return (
            <div > 
                <h1>Carregando</h1>
            </div>
        )
    }

    if(user?.email) {
        return renderContent();
    }else{
        route.push('/login');
        return null;
    }
}