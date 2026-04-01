import { Typography, Box } from "@mui/material";

export default function About() {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        About
      </Typography>
      <Typography variant="body1" color="text.secondary">
        This is a demo website bootstrapped with Vite, React, Material UI, React
        Router, and TypeScript. It is deployed to GitHub Pages via GitHub Actions.
      </Typography>
    </Box>
  );
}
