import { Checkbox, MenuItem, TextField, Select, Button, Box, FormControl, InputLabel, FormControlLabel } from "@mui/material";
import { useRef, useState } from "react";

function CreateListing() {
    const companynameRef = useRef(null);
    const positionnameRef = useRef(null);
    const descriptionRef = useRef(null);
    const pricefromRef = useRef(null);
    const pricetoRef = useRef(null);
    const employmenttypeRef = useRef(null);
    const locationRef = useRef(null);
    const hopossibleRef = useRef(null);

    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        // handle form submission
    }

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%', maxWidth: 800, mx: 'auto' }}>
            <FormControl fullWidth margin="normal">
                <TextField
                    inputRef={companynameRef}
                    type="text"
                    id="companyname"
                    name="companyname"
                    label="Cég név"
                    variant="standard"
                    error={errors.companyname !== undefined}
                    helperText={errors.companyname}
                />
            </FormControl>
            <FormControl fullWidth margin="normal">
                <TextField
                    inputRef={positionnameRef}
                    type="text"
                    id="positionname"
                    name="positionname"
                    label="Pozíció név"
                    variant="standard"
                    error={errors.positionname !== undefined}
                    helperText={errors.positionname}
                />
            </FormControl>
            <FormControl fullWidth margin="normal">
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
            </FormControl>
            <Box display="flex" gap={2}>
                <FormControl fullWidth margin="normal">
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
                </FormControl>
                <FormControl fullWidth margin="normal">
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
                </FormControl>
            </Box>
            <FormControl fullWidth margin="normal" variant="standard" error={errors.employmenttype !== undefined}>
                <InputLabel id="employmenttype-label">Foglalkoztatás típusa</InputLabel>
                <Select
                    inputRef={employmenttypeRef}
                    labelId="employmenttype-label"
                    id="employmenttype"
                    name="employmenttype"
                    defaultValue=""
                >
                    <MenuItem value="" disabled>
                        <em>Foglalkoztatás típusa</em>
                    </MenuItem>
                    <MenuItem value="full-time">Teljes állás</MenuItem>
                    <MenuItem value="part-time">Részmunkaidős</MenuItem>
                    <MenuItem value="contract">Megbízásos</MenuItem>
                    <MenuItem value="internship">Gyakornoki</MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
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
            </FormControl>
            <FormControl fullWidth margin="normal">
                <FormControlLabel
                    control={<Checkbox inputRef={hopossibleRef} id="hopossible" name="hopossible" />}
                    label="Otthoni munkavégzés"
                />
            </FormControl>
            <Button variant="contained" type="submit">Elküld</Button>
        </Box>
    );
}

export default CreateListing;
