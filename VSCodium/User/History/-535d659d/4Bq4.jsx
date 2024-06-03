import React from 'react';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';

function JobDetails({ job, open, onClose }) {


    return (
        <Dialog open={open} onClose={onClose}
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
                                asd
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                Fizetési sáv
                            </div>
                            <div className="col">
                                asd
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                Foglalkoztatás típusa
                            </div>
                            <div className="col">
                                asd
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
        </Dialog>

    );
}

export default JobDetails;