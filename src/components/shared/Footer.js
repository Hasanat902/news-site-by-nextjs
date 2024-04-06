import { Box, Container, Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import Button from "@mui/material/Button";

const navItems = [
    {
      route: "Home",
      pathname: "/",
    },
    {
      route: "Pages",
      pathname: "/pages",
    },
    {
      route: "Category",
      pathname: "/category",
    },
    {
      route: "News",
      pathname: "/news",
    },
    {
      route: "About",
      pathname: "/about",
    },
    {
      route: "Contact",
      pathname: "/contact",
    },
  ];

const Footer = () => {
  return (
    <Box className="bg-black px-2 py-10">
      <Container>
        <Box className="w-full text-center" sx={{ "& svg": { color: "white" } }}>
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <XIcon />
          </IconButton>
          <IconButton>
            <InstagramIcon />
          </IconButton>
        </Box>
        <Box className="w-full text-center">
            {navItems.map((item) => (
              <Link key={item} href={item.pathname}>
                <Button className="text-white">{item.route}</Button>
              </Link>
            ))}
          </Box>
          <Typography variant="body2" color="gray" textAlign="center">
            @2024 News Site. Design by me
          </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
