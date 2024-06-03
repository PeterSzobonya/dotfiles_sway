import React from 'react';
import { Dialog, DialogContent, Grid } from '@mui/material';

function JobDetails({ job, open, onClose }) {

    function addSpaceAfterThreeChars(str) {
        let result = '';
        let count = 0;

        if (str === null || str === undefined) {
            return '';
        }

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
        <Dialog open={open} onClose={onClose}
            sx={{ '& .MuiDialog-paper': { width: '1000px', maxWidth: '1000px' } }}>
            <DialogContent>
                <div className="">
                    <div className="card-header">
                        Cég részletei
                    </div>
                    <div className="card-body">
                        <Grid container spacing={2}>
                            <Grid item xs={3}>
                                Név
                            </Grid>
                            <Grid item xs={9}>
                                {job?.company}
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={3}>
                                Pozíció
                            </Grid>
                            <Grid item xs={9}>
                                {job?.position}
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={3}>
                                Leírás
                            </Grid>
                            <Grid item xs={9}>
                                {job?.description}
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={3}>
                                Fizetési sáv
                            </Grid>
                            <Grid item xs={9}>
                                {addSpaceAfterThreeChars(job?.salaryFrom.toString())} - {addSpaceAfterThreeChars(job?.salaryTo.toString())} Ft
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={3}>
                                Foglalkoztatás típusa
                            </Grid>
                            <Grid item xs={9}>
                                {createReadableType(job?.type)}
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={3}>
                                Település
                            </Grid>
                            <Grid item xs={9}>
                                {job?.city}
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={3}>
                                Home Office
                            </Grid>
                            <Grid item xs={9}>
                                {job?.homeOffice ? 'Van' : 'Nincs'}
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </DialogContent>
        </Dialog>

    );
}

export default JobDetails;
