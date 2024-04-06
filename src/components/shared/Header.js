import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import headingImage from "@/assets/logo.png";
import { getCurrentDate } from "@/utils/getCurrentDate";

const Header = () => {
    const currentDate = getCurrentDate();

  return (
    <Box className="w-full my-5">
      <Container>
        <Image src={headingImage} width={500} height={500} className="mx-auto" alt="logo" />
        <Typography variant="body2" color="gray" textAlign="center" className="my-2">
          Journalism Without Fear or Favour
        </Typography>
        <Typography color="gray" textAlign="center">
          {currentDate}
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;
