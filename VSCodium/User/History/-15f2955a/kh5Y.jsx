import { Checkbox, MenuItem, TextField, Select } from "@mui/material";
import { useRef, useState } from "react";


function CreateListing() {
    const companynameRef = useRef(null);
    const positionnameRef = useRef(null);
    const descriptionRef = useRef(null);
    const pricefromRef = useRef(null);
    const pricetoRef = useRef(null);
    const emplomenttypeRef = useRef(null);
    const locationRef = useRef(null);
    const hopossibleRef = useRef(null);

    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                inputRef={companynameRef}
                type="text"
                id="companyname"
                name="companyname"
                label="Cég név"
                variant="standard"
                autoFocus
                error={errors.companyname !== undefined}
                helperText={errors.companyname}
            />
            <br />
            <TextField
                inputRef={positionnameRef}
                type="text"
                id="positionname"
                name="positionname"
                label="Pozíció név"
                variant="standard"
                autoFocus
                error={errors.positionname !== undefined}
                helperText={errors.positionname}
            />
            <br />
            <TextField
                inputRef={descriptionRef}
                type="text"
                id="description"
                name="description"
                label="Leírás"
                variant="standard"
                multiline
                maxRows={8}
                error={errors.description !== undefined}
                helperText={errors.description}
            />
            <br />
            <TextField
                inputRef={pricefromRef}
                type="number"
                id="pricefrom"
                name="pricefrom"
                label="Ár(-tól)"
                variant="standard"
                error={errors.pricefrom !== undefined}
                helperText={errors.pricefrom}
            />
            <TextField
                inputRef={pricetoRef}
                type="number"
                id="priceto"
                name="priceto"
                label="Ár(-ig)"
                variant="standard"
                error={errors.priceto !== undefined}
                helperText={errors.priceto}
            />
            <br />
            <Select
                inputRef={emplomenttypeRef}
                name="employmenttype"
                id="employmenttype"
                label="Foglalkoztatás típusa"
                error={errors.employmenttype !== undefined}
                helperText={errors.employmenttype}
            >
                <MenuItem value="full-time">Teljes állás</MenuItem>
                <MenuItem value="part-time">Részmunkaidős</MenuItem>
                <MenuItem value="contract">Megbízásos</MenuItem>
                <MenuItem value="internship">Gyakornoki</MenuItem>
            </Select>
            <br />
            <TextField
                inputRef={locationRef}
                type="text"
                id="location"
                name="location"
                label="Település"
                variant="standard"
                error={errors.location !== undefined}
                helperText={errors.location}
            />
            <br />
            <Checkbox
                inputRef={hopossibleRef}
                id="hopossible"
                name="hopossible"
                label="Otthoni munkavégzés"
            />
            <Button variant="standard" type="submit"> Elküld</Button>
        </form>
    );
}

export default CreateListing;