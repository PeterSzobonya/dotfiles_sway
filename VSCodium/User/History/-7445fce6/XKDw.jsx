import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser, selectToken } from "../../redux/reducers/auth/userReducer";
import '../../styling/profile.css'
import { invalidateQueries, useAddExperiencesMutation, useGetExperiencesQuery, useUpdateExperienceMutation } from "../../redux/reducers/experience/experienceReducerApi";
import { useState } from "react";


function Profile() {
    const profile = useSelector(selectCurrentUser);
    const token = useSelector(selectToken);
    const { data, refetch } = useGetExperiencesQuery(token, { refetchOnMountOrArgChange: true });

    const [experiences, setExperiences] = useState(data.data);

    const [isEditing, setIsEditing] = useState(false);
    const [editableExperiences, setEditableExperiences] = useState([]);


    const [addExperience] = useAddExperiencesMutation();
    const [updateExperince] = useUpdateExperienceMutation();

    const handleEditClick = () => {
        setEditableExperiences(experiences);
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        const edited = editableExperiences.filter(exp => {
            if (exp.id === null || exp.id === undefined) {
                return true;
            }

            const orig = experiences.filter(e => e.id === exp.id)[0];
            return isExperienceDifferent(orig, exp);
        });

        addOrUpdateExperience(edited).then(refetch());
        refetch();
        setIsEditing(false);
    };

    const addOrUpdateExperience = async (edited) => {
        for (let i = 0; i < edited.length; i++) {
            const exp = edited[i];
            if (exp.id === null || exp.id === undefined) {
                // add
                const body = {
                    company: exp.company,
                    title: exp.title,
                    interval: exp.interval
                };
                try {
                    console.log(body, token);
                    const result = await addExperience({ body, token });
                    refetch();
                } catch (e) {
                    console.log(e);
                }

            } else {
                // update
                const body = {
                    company: exp.company,
                    title: exp.title,
                    interval: exp.interval
                }

                const id = exp.id;
                try {
                    const result = await updateExperince({ body, id, token });
                    refetch();
                } catch (e) {
                    console.log(e);
                }
            }
        }
    }

    const isExperienceDifferent = (exp1, exp2) => {
        return (
            exp1.company !== exp2.company ||
            exp1.title !== exp2.title ||
            exp1.interval !== exp2.interval
        );
    };

    const handleChange = (index, field, value) => {
        const updatedExperiences = editableExperiences.map((exp, i) =>
            i === index ? { ...exp, [field]: value } : exp
        );
        setEditableExperiences(updatedExperiences);
    };

    const handleAddClick = () => {
        setEditableExperiences([...editableExperiences, { company: '', title: '', interval: '' }]);
    };

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
                        </div>
                    ))
                    :
                    experiences?.map((experience, index) => (
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

export default Profile;