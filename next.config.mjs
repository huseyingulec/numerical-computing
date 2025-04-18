import nextra from "nextra";

const withNextra = nextra({
  search: true,
  defaultShowCopyCode: true,
});

export default withNextra({
  output: "export",

  // ... Other Next.js config options
  // output: 'export'
});
