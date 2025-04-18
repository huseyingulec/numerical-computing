import nextra from "nextra";

const withNextra = nextra({
  search: true,
  defaultShowCopyCode: true,
});

// You can include other Next.js configuration options here, in addition to Nextra settings:
export default withNextra({
  // ... Other Next.js config options
  basePath: '/numerical-computing', 
  exportTrailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true,
  }
});
