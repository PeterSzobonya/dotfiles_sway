import { useSelector } from "react-redux";
import { selectCurrentUser, selectToken } from "../redux/reducers/auth/userReducer";


function Home() {
    const user = useSelector(selectCurrentUser);
    const token = useSelector(selectToken);

    // userId, salaryFrom, salaryTo, company

    const [salaryFrom, setSalaryFrom] = useState(null);
    const [salaryTo, setSalaryTo] = useState(null);
    const [company, setCompany] = useState(null);
    const [type, setType] = useState(null);

    return (
        <>
        
        </>
    );
}

export default Home;