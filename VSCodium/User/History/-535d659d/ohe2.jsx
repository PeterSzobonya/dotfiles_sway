

function JobDetails({job}) {


    return (
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
                        {profile['fullname']}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        E-mail
                    </div>
                    <div className="col">
                        {profile['email']}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        Státusz
                    </div>
                    <div className="col">
                        {profile['role'] === 'jobseeker' ? 'Munkavállaló' : 'Munkáltató'}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobDetails;