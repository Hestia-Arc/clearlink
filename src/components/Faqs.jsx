import React from "react";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import { Box, Stack, Typography } from "@mui/material";
import { colors } from "../theme";

const AccordItem = ({ tag }) => {
  return (
    <Box
      sx={{
        padding: "25px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: 'center',
        borderBottom: "1px solid",
        borderColor: colors.gray[200],
      }}
    >
      <Typography variant="textHead4" sx={{ color: colors.gray[900] }}>
        {tag}
      </Typography>
      <AddCircleOutlineRoundedIcon sx={{color: colors.gray[400]}} />
    </Box>
  );
};
function Faqs() {
  return (
    <Box
      sx={{
        padding: "90px 85px",
        // border: "1px solid red",
      }}
    >
      <Box
        sx={{
          height: "560px",
          display: "flex",
          justifyContent: "space-between",
        //   border: "1px solid red",
        }}
      >
        <Stack spacing={1}>
          <Typography variant="textHead3" sx={{ color: colors.blue[700] }}>
            Support
          </Typography>
          <Typography variant="heading2" sx={{ color: colors.gray[900] }}>
            FAQs
          </Typography>
          <Typography variant="text3" sx={{ color: colors.gray[500] }}>
            Everything you need to know about the product <br />
            and billing. Can’t find the answer you’re looking <br />
            for? Please chat to our friendly team.
          </Typography>
        </Stack>

        {/* right */}
        <Box
          sx={{
            width: "53%",
            //  border: '1px solid black'
          }}
        >
          <Stack
            spacing={1}
            sx={{
              padding: "25px",
              border: "1px solid",
              borderColor: colors.gray[200],
              backgroundColor: colors.gray[50],
              borderRadius: "16px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: 'center'
               
              }}
            >
              <Typography variant="textHead4" sx={{ color: colors.gray[900] }}>
                How many participants can join a ClearLink video conference?
              </Typography>

              <RemoveCircleOutlineRoundedIcon sx={{color: colors.gray[400]}}/>
            </Box>
            <Typography variant="text2" sx={{ color: colors.gray[600], paddingRight: '60px' }}>
              ClearLink offers flexible meeting options. Depending on your
              subscription plan, you can host meetings with varying numbers of
              participants. Our plans are designed to accommodate small team
              collaborations and large-scale webinars, ensuring you have the
              right fit for your needs.
            </Typography>
          </Stack>

          <AccordItem tag="Can I use ClearLink on multiple devices?" />
          <AccordItem tag="Is ClearLink compatible with other video conferencing platforms?" />
          <AccordItem tag="How does ClearLink ensure the security of my video conferences?" />
          <AccordItem tag="Do I need to download any software to use ClearLink?" />
          <AccordItem tag="What kind of customer support does ClearLink provide?" />
        </Box>
      </Box>
    </Box>
  );
}

export default Faqs;
