import React from 'react';
import { Card, CardHeader, Button, Typography, CardContent } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HomeIcon from '@mui/icons-material/Home';
import { green } from '@mui/material/colors';
import { useGetJobsQuery } from '../../redux/reducers/jobs/jobsReducerApi';
import { useSelector } from 'react-redux';
import { selectCurrentUser, selectToken } from "../../redux/reducers/auth/userReducer";

function EmployerProfile() {
    const user = useSelector(selectCurrentUser)
    const token = useSelector(selectToken);
    const userId = user.id;
    const salaryFrom = '';
    const salaryFromValue = '';
    const company = '';
    const { data } = useGetJobsQuery({ userId, salaryFrom, salaryFromValue, company, token }, { refetchOnMountOrArgChange: true, skip: false });


    return (
        <>
            {data?.data.map((job, index) => (
                <Card className="job-card" key={job.id} sx={{ maxWidth: 800, width: 800 }}>
                    <CardHeader
                        titleTypographyProps={{ align: 'left' }}
                        title="Job Name"
                        action={
                            <>
                                <Button variant="contained" color="primary">Megréz</Button>
                                <Button variant="contained" color="primary">Szerkeszt</Button>
                                <Button variant="contained" color="error">Töröl</Button>
                            </>
                        }
                    />
                    <CardContent>
                        <div className='row' style={{ display: 'flex' }}>
                            <div className="col" style={{ display: 'flex', alignItems: 'center' }}>
                                <BusinessCenterIcon style={{ marginRight: 8 }} />
                                <div className="text">Full-time</div>
                            </div>
                            <div className="col" style={{ display: 'flex', alignItems: 'center' }}>
                                <LocationOnIcon style={{ marginRight: 8 }} />
                                <div className="text">New York</div>
                            </div>
                            <div className="col" style={{ display: 'flex', alignItems: 'center' }}>
                                <AttachMoneyIcon style={{ marginRight: 8 }} />
                                <div className="text">$50,000 - $60,000</div>
                            </div>
                            <div className="col" style={{ display: 'flex', alignItems: 'center' }}>
                                <HomeIcon style={{ color: green[500] }} />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </>
    );
}

export default EmployerProfile;
