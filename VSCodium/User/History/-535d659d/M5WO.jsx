import React from 'react';
import { Dialog, DialogContent, Grid } from '@mui/material';
import { grey } from '@mui/material/colors';

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

    const rows = [
        { label: 'Név', value: job?.company },
        { label: 'Pozíció', value: job?.position },
        { label: 'Leírás', value: job?.description },
        { label: 'Fizetési sáv', value: `${addSpaceAfterThreeChars(job?.salaryFrom.toString())} - ${addSpaceAfterThreeChars(job?.salaryTo.toString())} Ft` },
        { label: 'Foglalkoztatás típusa', value: createReadableType(job?.type) },
        { label: 'Település', value: job?.city },
        { label: 'Home Office', value: job?.homeOffice ? 'Van' : 'Nincs' }
    ];

    return (
        <Dialog open={open} onClose={onClose}
            sx={{ '& .MuiDialog-paper': { width: '1000px', maxWidth: '1000px' } }}>
            <DialogContent>
                <div className="">
                    <div className="card-header">
                        Cég részletei
                    </div>
                    <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <Typography variant="h6">
                                Cég részletei
                            </Typography>
                            <Typography variant="subtitle1">
                                Megtetszett a lehetőség? Jelentkezz!
                            </Typography>
                        </div>
                        <Button variant="contained" style={{ backgroundColor: 'green', color: 'white' }}>
                            Jelentkezés
                        </Button>
                    </div>
                    <div className="card-body">
                        {rows.map((row, index) => (
                            <Grid 
                                container 
                                key={index} 
                                sx={{ 
                                    backgroundColor: index % 2 === 0 ? grey[200] : 'inherit', 
                                    padding: '10px 0' 
                                }}
                            >
                                <Grid item xs={3}>
                                    {row.label}
                                </Grid>
                                <Grid item xs={9}>
                                    {row.value}
                                </Grid>
                            </Grid>
                        ))}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default JobDetails;
