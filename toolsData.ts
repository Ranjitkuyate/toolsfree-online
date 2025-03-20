export interface Tool {
  name: string;
  path: string; // Path for the tool (e.g., "/age-calculator")
  description: string;
  icon: string;
}

const tools: Tool[] = [
  {
    name: "Age Calculator",
    path: "/age-calculator", // 🔴 Remove "/tools" from the path
    description: "Calculate age from birth date",
    icon: "🕒",
  },
  {
    name: "Fake Data Generator",
    path: "/fake-data-generator", // 🔴 Remove "/tools" here too
    description: "Generate fake test data",
    icon: "📊",
  },
];

export default tools;
