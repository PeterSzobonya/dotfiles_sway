import { useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/reducers/auth/userReducer";
import EmployerProfile from "../views/employer/Profile";
import Profile from "../views/employee/Profile";



function ProfileRoute() {
    const user = useSelector(selectCurrentUser);

    return (
        <>
            {user.role === 'company' ? <EmployerProfile /> : <Profile />}
        </>
    );
}

export default ProfileRoute;