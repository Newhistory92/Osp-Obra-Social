import type { NextPage } from "next"; 
import { memo } from "react";
import React from 'react';
import Parser from 'html-react-parser';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';;

export type RequisitoItem = {
  titulo: string;
  contenido: string;
  id: number;
};
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  color: 'black',
  fontFamily: 'Ubuntu, sans-serif',
  textAlign: 'left',
  fontSize: '1rem',
  paddingRight: '30px'
  
}));

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '10px',
   
  '&:not(:last-child)': {
    borderBottom: '1px  solid #E42E27',
    marginBottom: theme.spacing(2),
    
  },
  '&:last-child': {
    borderBottom: '1px solid #E42E27', 
    
  },
  '&::before': {
    display: 'none',
  },
  width: '90%',
  margin: '10px 20px auto',
  boxSizing: 'border-box',

}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: '#E42E27', marginRight: '15px' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'white',
  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
  flexDirection: 'row',
  borderRadius: '10px',
  
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
    fontFamily: 'Ubuntu, sans-serif',
    fontWeight: 'bold',
    margin: 'auto 15px auto',
    textTransform: 'capitalize',
    
  },
  ...theme.applyStyles('dark', {
    backgroundColor: 'rgba(255, 255, 255, .05)',
  }),
}));

export type RequisitosType = {
  requisitos: Array<RequisitoItem>;
};

const Requisitos: NextPage<RequisitosType> = memo(({ requisitos }) => {
  const [expanded, setExpanded] = React.useState<string | false>(false); // Estado inicial corregido

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {requisitos.map((requisito, index) => (
        <Accordion
          key={requisito.id}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
        >
          <AccordionSummary aria-controls={`panel${index}-content`} id={`panel${index}-header`}>
            <Typography>{requisito.titulo}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {Parser(requisito.contenido)}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
});

export default Requisitos;