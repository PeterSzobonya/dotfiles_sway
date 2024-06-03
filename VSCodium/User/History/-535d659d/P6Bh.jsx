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