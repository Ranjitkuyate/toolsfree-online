export interface Tool {
  name: string;
  path: string;
  description: string;
  icon: string;
}

const tools: Tool[] = [
  {
    name: "Age Calculator",
    path: "/tools/age-calculator", // ✅ Include `/tools/` in the path
    description: "Calculate age from birth date",
    icon: "🕒",
  },
  {
    name: "Fake Data Generator",
    path: "/tools/fake-data-generator", // ✅ Include `/tools/`
    description: "Generate fake test data",
    icon: "📊",
  },
];

export default tools;
