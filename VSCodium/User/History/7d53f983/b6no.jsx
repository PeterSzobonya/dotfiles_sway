import { Button, TextField, Box } from "@mui/material";
import { useRef, useState } from "react";
import { useLoginMutation } from "../../redux/reducers/auth/userReducerAPI";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/reducers/auth/userReducer";
import { useDispatch } from 'react-redux';
import { useGetExperiencesMutation } from "../../redux/reducers/experience/experienceReducerApi";
import { setExperiences } from "../../redux/reducers/experience/experienceReducer";

function Login() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const [errors, setErrors] = useState({});

  const [authLogin] = useLoginMutation();
  const [experienceMutation] = useGetExperiencesMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    const newErrors = {};

    if (username === "") {
      newErrors.username = "Username is required";
    }

    if (password === "") {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    if (Object.values(newErrors).length > 0) {
      return;
    }

    try {
      const result = await authLogin({
        strategy: "local",
        email: username,
        password: password,
      }).unwrap();
      console.log(result['accessToken']);
      const token = result['accessToken'];
      dispatch(login(result));
      const resultExperiences = await experienceMutation(token).unwrap();
      // dispatch(setExperiences(resultExperiences));
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
      newErrors.username = "Login error";
      setErrors(newErrors);
    }
  };

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
      <Button variant="contained" type="submit" sx={{ mt: 2, width: '100%' }}>Elküld</Button>
    </Box>
  );
};

export default Login;
