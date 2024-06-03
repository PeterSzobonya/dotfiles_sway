import { useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/reducers/auth/userReducer";


function ProfileRoute() {
    const user = useSelector(selectCurrentUser);

    return (
        <>
        
        </>
    );
}

export default ProfileRoute;