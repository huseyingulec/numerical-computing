import nextra from "nextra";

const withNextra = nextra({
  search: true,
  defaultShowCopyCode: true,
  contentDirBasePath: "content",
});

const isProduction = process.env.NODE_ENV === "production";
const repoName = "numerical-computing";

export default withNextra({
  output: "export",
  basePath: isProduction ? `/${repoName}` : "",
  images: {
    unoptimized: true,
  },
});
