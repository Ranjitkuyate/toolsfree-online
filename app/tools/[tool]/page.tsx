"use client";
import { notFound } from "next/navigation";
import tools from "@/toolsData";
import { Container, Typography } from "@mui/material";
import AgeCalculator from "@/components/AgeCalculator";

export default function ToolPage({ params }: { params: { tool: string } }) {
  const tool = tools.find((t) => t.path === `/tools/${params.tool}`);

  if (!tool) notFound();

  return (
    <Container maxWidth="lg">
      <Typography variant="h3" gutterBottom>
        {tool.name}
      </Typography>
      {params.tool === "age-calculator" && <AgeCalculator />}
    </Container>
  );
}
