import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Input from "./Input";
import "./Style.css";
import Todoos from "./Todoos";


export default function Todo() {

  return (
    <div>
    <br></br>
    {/* <Input /> */}
       <br></br>
        <Todoos />
        {/* <Button variant="outlined" size="large">
          SUBMIT
        </Button> */}
    </div>
  );
}
