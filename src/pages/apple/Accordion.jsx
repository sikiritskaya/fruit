//import { useState } from "react";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Fact 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          APPLES MAKE UP HALF OF THE WORLD’S DECIDUOUS FRUIT TREE PRODUCTION
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Fact 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          APPLE TREES TAKE YEARS TO PRODUCE FRUIT
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Fact 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          APPLE CONSUMPTION MAY REDUCE THE RISK OF CANCER
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Fact 4</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          A BUSHEL OF APPLES WEIGHS ABOUT 42 POUNDS
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

/* const Accordion = () => {
  const [value, setValue] = useState("");
  const[isActive, setIsActive] = useState(false)
  const changeSelect = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <select value={value} onChange={changeSelect}>
        <option value="1"  onClick={() => setIsActive(!isActive)}>Fact1</option>   
        <option value="2">Fact2</option>
        <option value="3">Fact3</option>
        <option value="4">Fact4</option>
      </select>

      {value === "1" && <p>apples are very tasty</p>}
      {value === "2" && <p>apples are very tasty 2</p>}
      {value === "3" && <p>apples are very tasty 3</p>}
      {value === "4" && <p>apples are very tasty 4</p>}
    </div>
  );
};
 */
//export default Accordion
