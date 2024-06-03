import { Button, TextField } from "@mui/material";
import { useRef, useState } from "react";
import { useLoginMutation } from "../../redux/reducers/userReducerAPI";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/reducers/userReducer";
import { useDispatch, useSelector } from 'react-redux';

function Login () {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const [errors, setErrors] = useState({});

  const [authLogin] = useLoginMutation();
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
      dispatch(login(result));
      navigate("/", {replace: true});
    } catch (error) {
      newErrors.username = "Login error";
      setErrors(newErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/*<label htmlFor="username">Felhasználónév: </label>*/}
      <TextField
        inputRef={usernameRef}
        type="text"
        id="username"
        name="username"
        label="Felhasználónév"
        variant="standard"
        autoFocus
        error={errors.username !== undefined}
        helperText={errors.username}
      />
      {/*errors.username ? errors.username : ''*/}
      <br />
      {/*<label htmlFor="password">Jelszó: </label>*/}
      <TextField
        inputRef={passwordRef}
        type="password"
        id="password"
        name="password"
        label="Jelszó"
        variant="standard"
        error={errors.username !== undefined}
        helperText={errors.username}
      />
      {/*errors.password ? errors.password : ''*/}
      <br />
      <Button variant="standard" type="submit"> Elküld</Button>
    </form>
  );
};

export default Login;
