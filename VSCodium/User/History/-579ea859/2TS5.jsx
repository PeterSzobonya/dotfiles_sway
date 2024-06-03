import React, { useState } from 'react';

import { useDeleteJobMutation, useGetJobsQuery } from '../../redux/reducers/jobs/jobsReducerApi';
import { useSelector } from 'react-redux';
import { selectCurrentUser, selectToken } from "../../redux/reducers/auth/userReducer";
import JobCard from '../../components/cards/JobCard';
import JobDetails from '../both/JobDetails';
import { Button } from '@mui/material';

function EmployerProfile() {
    const user = useSelector(selectCurrentUser)
    const token = useSelector(selectToken);
    const userId = user.id;
    const salaryFrom = '';
    const salaryFromValue = '';
    const company = '';
    const { data, refetch } = useGetJobsQuery({ userId, salaryFrom, salaryFromValue, company, token }, { refetchOnMountOrArgChange: true, skip: false });

    const [openPopup, setOpenPopup] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);

    const [deleteJob] = useDeleteJobMutation();

    const handleOpenPopup = (job) => {
        console.log("here");
        if (openPopup) {
            setOpenPopup(false);
        }
        setSelectedJob(job);
        setOpenPopup(true);
    };

    const handleClosePopup = () => {
        setOpenPopup(false);
    };

    const removeJob = async (job) => {
        const id = job.id;
        try {
            const response = await deleteJob({id, token});
            refetch();
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            {data?.data.map((job, index) => (
                <JobCard key={job.id} job={job} removeJob={(job) => removeJob(job)} openDetails={(job) => handleOpenPopup(job)} />
            ))}
            <Button >Hirdetés hoáadása</Button>
            <JobDetails job={selectedJob} user={user} open={openPopup} onClose={handleClosePopup} />
        </>
    );
}

export default EmployerProfile;
