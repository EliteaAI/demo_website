import { Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        gap: 3,
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        Hello World!
      </Typography>
      <Typography variant="h6" color="text.secondary">
        A React + MUI + React Router + TypeScript site on GitHub Pages
      </Typography>
      <Button variant="contained" size="large" onClick={() => navigate("/about")}>
        Learn More
      </Button>
    </Box>
  );
}
