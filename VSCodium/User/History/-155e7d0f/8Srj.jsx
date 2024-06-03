import { useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/reducers/auth/userReducer";


function Home() {
    const user = useSelector(selectCurrentUser)

    return (
        <>
        
        </>
    );
}

export default Home;