import React, { useState } from 'react';

import { useDeleteJobMutation, useGetJobsQuery } from '../../redux/reducers/jobs/jobsReducerApi';
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

    const deleteJob = async (job) => {
        const id = job.id;

        try {
            cont response = await deleteJob({id, token});
        }
    }

    return (
        <>
            {data?.data.map((job, index) => (
                <JobCard key={job.id} job={job} deleteJob={(job) => deleteJob(job)} openDetails={(job) => handleOpenPopup(job)} />
            ))}
            <JobDetails job={selectedJob} user={user} open={openPopup} onClose={handleClosePopup} />
        </>
    );
}

export default EmployerProfile;
