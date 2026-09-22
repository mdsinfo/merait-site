import Script from "next/script";

export function Analytics() {
  const gtm = process.env.NEXT_PUBLIC_GTM_ID;
  const ga = process.env.NEXT_PUBLIC_GA_ID;
  const gtmOk = Boolean(gtm && /^GTM-[A-Z0-9]+$/.test(gtm));
  const gaOk = Boolean(ga && /^G-[A-Z0-9]+$/.test(ga));

  if (gtmOk && gtm) {
    return (
      <Script id="gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${gtm}');`}
      </Script>
    );
  }

  if (gaOk && ga) {
    return (
      <>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga}`} strategy="afterInteractive" />
        <Script id="ga" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${ga}');`}
        </Script>
      </>
    );
  }

  return null;
}
