"use client";
import { Grid, Card, CardContent, Typography, Link } from "@mui/material";
import NextLink from "next/link";
import { Tool } from "@/toolsData";

export default function ToolGrid({ tools }: { tools: Tool[] }) {
  return (
    <Grid container spacing={3}>
      {tools.map((tool) => (
        <Grid item xs={12} sm={6} md={4} key={tool.name}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                <Link
                  component={NextLink}
                  href={tool.path}
                  color="primary"
                >
                  {tool.name}
                </Link>
              </Typography>
              <Typography variant="body2">{tool.description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
