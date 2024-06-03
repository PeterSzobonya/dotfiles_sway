

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
            <div className="card-header card-header-row">
                Tapasztalatok
                {!isEditing ? (
                    <button className="edit-button" onClick={handleEditClick}>
                        <i className="edit-icon">✎</i>
                    </button>
                ) : (
                    <div>
                        <button className="add-button" onClick={handleAddClick}>
                            <i className="plus-icon">+</i>
                        </button>
                        <button className="save-button" onClick={handleSaveClick}>
                            <i className="save-icon">💾</i>
                        </button>
                    </div>
                )}
            </div>
            <div className="card-body">
                {isEditing ?
                    editableExperiences.map((experience, index) => (
                        <div className="row" key={index}>
                            <div className="col">
                                <input
                                    type="text"
                                    value={experience.company}
                                    onChange={(e) => handleChange(index, 'company', e.target.value)}
                                />
                            </div>
                            <div className="col">
                                <input
                                    type="text"
                                    value={experience.title}
                                    onChange={(e) => handleChange(index, 'title', e.target.value)}
                                />
                            </div>
                            <div className="col">
                                <input
                                    type="text"
                                    value={experience.interval}
                                    onChange={(e) => handleChange(index, 'interval', e.target.value)}
                                />
                            </div>
                            <div className="col">
                                <button className="remove-button" onClick={() => handleRemoveClick(experience, index)}>
                                    <i className="remove-icon">❌</i>
                                </button>
                            </div>
                        </div>
                    ))
                    :
                    data?.data?.map((experience, index) => (
                        <div className="row" key={index}>
                            <div className="col">{experience.company}</div>
                            <div className="col">{experience.title}</div>
                            <div className="col">{experience.interval}</div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default JobDetails;