import React, { useState } from 'react';

import { useGetJobsQuery } from '../../redux/reducers/jobs/jobsReducerApi';
import { useSelector } from 'react-redux';
import { selectCurrentUser, selectToken } from "../../redux/reducers/auth/userReducer";
import JobCard from '../../components/cards/JobCard';
import JobDetails from '../both/JobDetails';

function EmployerProfile() {
    const user = useSelector(selectCurrentUser)
    const token = useSelector(selectToken);
    const userId = user.id;
    const salaryFrom = '';
    const salaryFromValue = '';
    const company = '';
    const { data } = useGetJobsQuery({ userId, salaryFrom, salaryFromValue, company, token }, { refetchOnMountOrArgChange: true, skip: false });

    const [openPopup, setOpenPopup] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);

    const handleOpenPopup = (job) => {
        if (openPopup) {
            setOpenPopup(false);
        }
        setSelectedJob(job);
        setOpenPopup(true);
    };

    const handleClosePopup = () => {
        setOpenPopup(false);
    };

    return (
        <>
            {data?.data.map((job, index) => (
                <JobCard key={job.id} job={job} openDetails={(job) => handleOpenPopup(job)} />
            ))}
            <JobDetails job={selectedJob} open={false} onClose={handleClosePopup} />
        </>
    );
}

export default EmployerProfile;
