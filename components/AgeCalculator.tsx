"use client";
import { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";

export default function AgeCalculator() {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState<number | null>(null);

  const calculateAge = () => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    const diff = today.getTime() - birthDateObj.getTime();
    const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    setAge(age);
  };

  return (
    <Box>
      <TextField
        label="Birth Date"
        type="date"
        InputLabelProps={{ shrink: true }}
        fullWidth
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" onClick={calculateAge}>
        Calculate Age
      </Button>
      {age !== null && (
        <Typography variant="h6" mt={2}>
          Your age is {age} years.
        </Typography>
      )}
    </Box>
  );
}
