import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import { ThemeSwitch } from "nextra-theme-docs";
import { ReactNode } from "react";
import Script from "next/script"; // Import the Script component

export const metadata = {
  title: {
    default: "Numerical Computing – PoliTO Linear Algebra Resources",
    template: "%s | Numerical Computing",
  },
  description:
    "A student-friendly reference site on numerical computing, linear algebra, and MATLAB at Politecnico di Torino.",
  keywords: [
    "Numerical Computing",
    "Linear Algebra",
    "MATLAB",
    "Politecnico di Torino",
    "PoliTO",
    "Engineering Math",
    "lag polito",
    "linear algebra polito",
    "numerical computing polito",
    "numerical computing",
    "politecnico lag",
    "politecnico di torino linear algebra",
    "politecnico di torino numerical computing",
    "polito linear algebra",
    "polito numerical computing",
    "polito matlab",
    "politecnico linear algebra",
    "politecnico numerical computing",
    "politecnico matlab",
    "politecnico di torino matlab",
  ],
  authors: [{ name: "Huseyin Gulec" }],
  creator: "Huseyin Gulec",
  openGraph: {
    title: "Numerical Computing – PoliTO Linear Algebra Resources",
    description:
      "A student-friendly reference site on numerical computing, linear algebra, and MATLAB at Politecnico di Torino.",
    url: "https://huseyingulec.github.io/numerical-computing/",
    siteName: "Numerical Computing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/general/matlab-cover.png", // Make sure this matches the one you added earlier
        width: 1200,
        height: 630,
        alt: "Numerical Computing – PoliTO MATLAB",
      },
    ],
  },
};

const navbar = (
  <Navbar
    logo={
      <>
        {" "}
        {/* <img
          src="/images/general/icon.png"
          alt="Logo"
          width={30}
          height={20}
        />{" "} */}
        <span style={{ fontWeight: 900 }}>Numerical Computing</span>
      </>
    }
  >
    <ThemeSwitch />
  </Navbar>

  // ... Your additional navbar options
);
const footer = <Footer> {new Date().getFullYear()} © </Footer>;

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        <link rel="shortcut icon" href="/images/general/icon.png" />
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
        <meta
          name="google-adsense-account"
          content="ca-pub-9376535480087035"
        ></meta>
      </Head>
      {/* Google Analytics (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-64NN156EFM"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-64NN156EFM');
        `}
      </Script>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/huseyingulec/numerical-computing/blob/main"
          footer={footer}

          //   lastUpdated={}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
