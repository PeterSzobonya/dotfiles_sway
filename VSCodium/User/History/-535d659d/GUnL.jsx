import React from 'react';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';

function JobDetails({ job, open, onClose }) {


    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Popup Window</DialogTitle>
            <DialogContent>
                <div className="card">
                    <div className="card-header">
                        Profile
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                Teljes név
                            </div>
                            <div className="col">
                                asd
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                E-mail
                            </div>
                            <div className="col">
                                asd
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                Státusz
                            </div>
                            <div className="col">
                                asd
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>

    );
}

export default JobDetails;