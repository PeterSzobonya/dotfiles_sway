import { Button, MenuItem, Select, TextField, Box, FormControl, InputLabel } from "@mui/material";
import { useRef, useState } from "react";
import { useLoginMutation, useRegisterMutation } from "../../redux/reducers/auth/userReducerAPI";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useAddExperiencesMutation } from "../../redux/reducers/experience/experienceReducerApi";
import { login } from "../../redux/reducers/auth/userReducer";

function Register() {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const fullnameRef = useRef(null);
    const roleselectorRef = useRef(null);
    const experienceRef = useRef(null);

    const [errors, setErrors] = useState({});
    const [role, setRole] = useState('');

    const [authRegister] = useRegisterMutation();
    const [authLogin] = useLoginMutation();
    const [addExperience] = useAddExperiencesMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRoleChange = (event) => {
        setRole(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        const fullname = fullnameRef.current.value;
        const role = roleselectorRef.current.value;
        const experience = experienceRef.current ? experienceRef.current.value : '';

        const newErrors = {};

        if (username === "") {
            newErrors.username = "Username is required";
        }

        if (password === "") {
            newErrors.password = "Password is required";
        }

        if (fullname === "") {
            newErrors.fullname = "Full name is required";
        }

        if (role === "") {
            newErrors.role = "Role is required";
        }

        setErrors(newErrors);
        if (Object.values(newErrors).length > 0) {
            return;
        }

        try {
            const result = await authRegister({
                email: username,
                fullname: fullname,
                password: password,
                role: role
            }).unwrap();
            const resultLogin = await authLogin({
                strategy: "local",
                email: username,
                password: password
            }).unwrap();
            dispatch(login(resultLogin));
            if (experience !== '') {
                const token = resultLogin['accessToken'];
                addExperiences(experience, token);
            }
            navigate("/", { replace: true });
        } catch (error) {
            console.log(error);
            newErrors.username = "Register error";
            setErrors(newErrors);
        }
    };

    const addExperiences = async (experiences, token) => {
        const lines = experiences.split('\n');

        const newErrors = {};

        const body = lines.map(l => {
            const attribs = l.split(';');
            return {
                comapny: attribs[0],
                title: attribs[1],
                interval: attribs[2]
            }
        });


        try {
            console.log(token);
            const result = await addExperience(body, token).unwrap();
            dispatch(addExperiences(result));
        } catch (error) {
            console.log(error);
            newErrors.username = "Register error";
            setErrors(newErrors);
        }
    }

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%', maxWidth: 400, mx: 'auto', mt: 4 }}>
            <TextField
                inputRef={usernameRef}
                type="text"
                id="username"
                name="username"
                label="Felhasználónév"
                variant="standard"
                fullWidth
                autoFocus
                margin="normal"
                error={errors.username !== undefined}
                helperText={errors.username}
            />
            <TextField
                inputRef={fullnameRef}
                type="text"
                id="fullname"
                name="fullname"
                label="Teljes név"
                variant="standard"
                fullWidth
                margin="normal"
                error={errors.fullname !== undefined}
                helperText={errors.fullname}
            />
            <TextField
                inputRef={passwordRef}
                type="password"
                id="password"
                name="password"
                label="Jelszó"
                variant="standard"
                fullWidth
                margin="normal"
                error={errors.password !== undefined}
                helperText={errors.password}
            />
            <FormControl fullWidth margin="normal" error={errors.role !== undefined}>
                <InputLabel id="role-label">Profil típus</InputLabel>
                <Select
                    labelId="role-label"
                    inputRef={roleselectorRef}
                    name="role"
                    id="role"
                    label="Profil típus"
                    value={role}
                    onChange={handleRoleChange}
                >
                    <MenuItem value="company">Munkáltató</MenuItem>
                    <MenuItem value="jobseeker">Munkavállaló</MenuItem>
                </Select>
            </FormControl>
            {role === "jobseeker" && (
                <TextField
                    inputRef={experienceRef}
                    type="text"
                    id="experience"
                    name="experience"
                    label="Munkatapasztalat"
                    variant="standard"
                    fullWidth
                    margin="normal"
                    multiline
                    rows={4}
                    error={errors.experience !== undefined}
                    helperText={errors.experience}
                />
            )}
            <Button variant="contained" type="submit" sx={{ mt: 2, width: '100%' }}>Elküld</Button>
        </Box>
    );
}

export default Register;
