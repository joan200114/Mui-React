import {Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {useState} from 'react'

export const MuiAccordion = () => {
    const [expanded, setExpanded] = useState<string | false>(false)
    const handleChange =(isExpanded: boolean, panel: string) => {
        setExpanded(isExpanded? panel : false)
    }
  return (
    <div>
        <Accordion expanded={ expanded === 'panel1'} 
        onChange={(event, isExpanded) => 
        handleChange(isExpanded, 'panel1')}
        >
            <AccordionSummary 
            id='panel1-header' 
            aria-controls='panel1-content'
            expandIcon={<ExpandMoreIcon/>}
            >
                <Typography> Accordion 1</Typography>
            </AccordionSummary>

            <AccordionDetails>
            <Typography>
            The accordion is a graphical control element comprising a vertically
             stacked list of items, such as labels or thumbnails. 
             Each item can be "expanded" or "collapsed" to reveal the content
              associated with that item.
                   </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion expanded={ expanded === 'panel2'}
         onChange={(event, isExpanded) => 
            handleChange(isExpanded, 'panel2')
    }>
            <AccordionSummary 
            id='panel2-header' 
            aria-controls='panel2-content'
            expandIcon={<ExpandMoreIcon/>}
            >
                <Typography> Accordion 2</Typography>
            </AccordionSummary>

            <AccordionDetails>
            <Typography>
            An accordion is a menu composed of vertically stacked headers that reveal 
            more details when triggered (often by a mouse click). 
            Since this web design pattern highlights only the most critical information
             of a section but makes the rest easily accessible, 
             it's a common element in responsive design
                   </Typography>
            </AccordionDetails>
        </Accordion>
       
        <Accordion expanded={ expanded === 'panel3'}
        onChange={(event, isExpanded) => 
            handleChange(isExpanded, 'panel3')
        
        }>
            <AccordionSummary 
            id='panel3-header' 
            aria-controls='panel3-content'
            expandIcon={<ExpandMoreIcon/>}
            >
                <Typography> Accordion 3</Typography>
            </AccordionSummary>

            <AccordionDetails>
            <Typography>
            In React, an accordion is a user interface component commonly 
            used to show or hide content sections based on user interaction. 
            It typically consists of multiple sections or panels, where only 
            one panel is visible at a time. When a user clicks on a panel, it 
            expands to reveal its content, while other panels collapse or close.
                   </Typography>
            </AccordionDetails>
        </Accordion>

        


    </div>
  )
}
