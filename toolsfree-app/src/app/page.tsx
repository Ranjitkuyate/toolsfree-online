"use client";
import ToolGrid from "@/components/ToolGrid";
import { Container, Typography, TextField } from "@mui/material";
import { useState } from "react";
import tools from "@/toolsData";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTools = tools.filter((tool) =>
    tool.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container maxWidth="lg">
      <Typography variant="h2" gutterBottom>
        Free Online Tools
      </Typography>
      <TextField
        label="Search tools..."
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ToolGrid tools={filteredTools} />
    </Container>
  );
}
