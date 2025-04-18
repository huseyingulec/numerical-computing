import { useRouter } from "next/router";
import { getStaticPropsForPage, loadPage } from "nextra/page";

export async function generateStaticParams() {
  // Return an array of possible values for mdxPath
  return [
    { mdxPath: ["index"] },
    { mdxPath: ["syntax1"] },
    { mdxPath: ["syntax2"] },
    { mdxPath: ["machine"] },
    { mdxPath: ["interpolation"] },
    { mdxPath: ["linear1"] },
    { mdxPath: ["linear2"] },
    { mdxPath: ["eigen"] },
    { mdxPath: ["how2"] },
  ];
}

export async function generateMetadata({ params }) {
  const page = await loadPage(params.mdxPath?.join("/") || "index");
  return {
    title: page.frontMatter?.title,
    description: page.frontMatter?.description,
  };
}

export default async function Page({ params }) {
  const MDXContent = await loadPage(params.mdxPath?.join("/") || "index");

  return (
    <div>
      <MDXContent />
    </div>
  );
}
