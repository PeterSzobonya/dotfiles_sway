

function JobCard({ job }) {

    return (
        <Card className="job-card" key={job.id} sx={{ maxWidth: 1200, width: 1200, margin: 3 }}>
            <CardHeader
                titleTypographyProps={{ align: 'left' }}
                title={job.position}
                action={
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <Button variant="contained" color="primary">Megréz</Button>
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