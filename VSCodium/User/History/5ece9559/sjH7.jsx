import { Card, CardHeader, Button, CardContent, Box } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HomeIcon from '@mui/icons-material/Home';
import { green } from '@mui/material/colors';

function JobCard({ job }) {

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
        <Card className="job-card" key={job.id} sx={{ maxWidth: 1200, width: 1200, margin: 3 }}>
            <CardHeader
                titleTypographyProps={{ align: 'left' }}
                title={job.position}
                action={
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <Button variant="contained" color="primary">Megnéz</Button>
                        <Button variant="contained" color="primary">Szerkeszt</Button>
                        <Button variant="contained" color="error">Töröl</Button>
                    </Box>
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
                        <div className="text">{job.city}</div>
                    </div>
                    <div className="col" style={{ display: 'flex', alignItems: 'center' }}>
                        <AttachMoneyIcon style={{ marginRight: 8 }} />
                        <div className="text">{addSpaceAfterThreeChars(job.salaryFrom.toString())} - {addSpaceAfterThreeChars(job.salaryTo.toString())} Ft</div>
                    </div>
                    <div className="col" style={{ display: 'flex', alignItems: 'center' }}>
                        <HomeIcon style={{ color: job.homeOffice ? green[500] : 'red' }} />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default JobCard