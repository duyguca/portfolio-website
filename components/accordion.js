import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import MyCodeBlock from "@/components/codeBlock";

export default function MyAccordion({ currentData }) {
  return (
    <div className="mb-20">
      <Accordion className="bg-white ">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Planning</Typography>
        </AccordionSummary>
        <AccordionDetails className="border-b border-pink-500 bg-pink-100">
          <Typography>
            {" "}
            <div className="flex flex-col sm:flex-row text-sm sm:text-base justify-center items-center gap-5 p-4 ">
              <Image
                className="w-full"
                src={currentData.movieHover}
                width={200}
                height={400}
                alt="movie-search"
              />
              <p>{currentData.planning}</p>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="bg-white">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Highlights</Typography>
        </AccordionSummary>
        <AccordionDetails className="border-b border-pink-500 bg-pink-100">
          <Typography>
            <div className="flex flex-col sm:flex-row text-sm sm:text-base justify-center items-center gap-5">
              <Image
                className="w-full"
                src={currentData.movieSearch}
                width={200}
                height={200}
                alt="movie-search"
              />
              <p>{currentData.highlights}</p>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="bg-white">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="bg-white">What i learned</Typography>
        </AccordionSummary>
        <AccordionDetails className="border-b border-pink-500 bg-pink-100">
          <Typography>
            <div className="flex flex-col text-sm sm:text-base">
              <MyCodeBlock
                code={currentData.code}
                language="jsx"
                showLineNumbers={true}
              />
              <p className="p-4">{currentData.whatILearned}</p>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
