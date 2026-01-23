import Script from "next/script";

export function FontAwesomeLoader() {
  return (
    <>
      <Script id="fa-stylesheet-loader" strategy="afterInteractive">
        {`(function(){var load=function(){var link=document.createElement('link');link.rel='stylesheet';link.href='/fontawesome/css/all.min.css';link.media='print';link.onload=function(){this.media='all';};document.head.appendChild(link);};if(document.readyState==='complete'){load();}else{window.addEventListener('load',load,{once:true});}})();`}
      </Script>
      <noscript>
        <link rel="stylesheet" href="/fontawesome/css/all.min.css" />
      </noscript>
    </>
  );
}
