import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from '@mui/material/Box';
import "./Style.css";

export default function Input() {
    // تعریف options قبل از استفاده در useState
    const options = [""]; // گزینه‌های واقعی خود را اینجا اضافه کنید

    // فراخوانی useState را به داخل کامپوننت تابعی منتقل کنید
    const [value, setValue] = React.useState(options[0]);
    const [inputValue, setInputValue] = React.useState("");

    return (
        <div className="baa">
            <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                id="controllable-states-demo"
                options={options}
                sx={{ width: 700 }}
                renderInput={(params) => <TextField {...params} label="" />}
            />
        </div>
    );
}
