import { useSelector } from "react-redux";
import { selectCurrentUser, selectToken } from "../redux/reducers/auth/userReducer";


function Home() {
    const user = useSelector(selectCurrentUser);
    const token = useSelector(selectToken);

    

    return (
        <>
        
        </>
    );
}

export default Home;