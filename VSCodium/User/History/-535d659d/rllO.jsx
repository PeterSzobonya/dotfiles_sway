import React from 'react';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';

function JobDetails({ job, open, onClose }) {

    function addSpaceAfterThreeChars(str) {
        let result = '';
        let count = 0;

        for (let i = str.length - 1; i >= 0; i--) {
            result = str[i] + result;
            count++;
            if (count % 3 === 0 && i !== 0) {
                result = ' ' + result;
            }
        }

        return result;
    }

    function createReadableType(type) {
        if (type === 'full-time') {
            return 'Teljes állás';
        } else if (type === 'part-time') {
            return 'Részmunkaidős';
        } else if (type === 'contract') {
            return 'Megbízásos';
        } else if (type === 'internship') {
            return 'Gyakornoki';
        }
    }

    return (
        {job !== undefined ? <Dialog open={open} onClose={onClose}
            sx={{ '& .MuiDialog-paper': { width: '1000px', maxWidth: '1000px' } }}>
            <DialogContent>
                <div className="">
                    <div className="card-header">
                        Cég részletei
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                Név
                            </div>
                            <div className="col">
                                {job.company}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                Pozíció
                            </div>
                            <div className="col">
                                {job.position}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                Leírás
                            </div>
                            <div className="col">
                                {job.description}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                Fizetési sáv
                            </div>
                            <div className="col">
                                {addSpaceAfterThreeChars(job.salaryFrom.toString())} - {addSpaceAfterThreeChars(job.salaryTo.toString())} Ft
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                Foglalkoztatás típusa
                            </div>
                            <div className="col">
                                {createReadableType(job.type)}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                Település
                            </div>
                            <div className="col">
                                {job.city}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                Home Office
                            </div>
                            <div className="col">
                                {job.homeOffice ? 'Van' : 'Nincs'}
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog> : <></>}

    );
}

export default JobDetails;