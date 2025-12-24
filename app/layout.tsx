import './globals.css'
import '@/lib/fontawesome'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import Header from '@/components/Header'
export const metadata = {
  title: 'Vietnam Post Logistics - Giải pháp cho doanh nghiệp',
  description: 'Vietnam Post Logistics - Cung cấp các giải pháp toàn trình, vận chuyển Quốc tế, kho vận, TMĐT Quốc tế và Xuất Nhập khẩu cho doanh nghiệp.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="vi-VN">
      <head>
        <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, width=device-width" />
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-596M43V3');
          `
        }} />
        {/* End Google Tag Manager */}

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-F973DG4SGV"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-F973DG4SGV');
          `
        }} />

        {/* CSS Files */}
        {/* <link rel="stylesheet" href="/css/style.min.css" /> */}
        <link rel="stylesheet" href="/css/styles.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/style(1).css" />
        <link rel="stylesheet" href="/css/backdoor.css" />
        <link rel="stylesheet" href="/css/mona-custom.css" />
        <link rel="stylesheet" href="/css/update.css" />

        {/* Favicon */}
        <link rel="icon" href="https://vietnampostlogistics.com/wp-content/uploads/2025/07/cropped-logo-web-32x32.png" sizes="32x32" />
        <link rel="icon" href="https://vietnampostlogistics.com/wp-content/uploads/2025/07/cropped-logo-web-192x192.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="https://vietnampostlogistics.com/wp-content/uploads/2025/07/cropped-logo-web-180x180.png" />
      </head>
      <body className="home page-template page-template-page-template page-template-home-template page-template-page-templatehome-template-php page page-id-8 wp-custom-logo desktop-detect">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-596M43V3" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Header />
        {children}
        <Footer />
        <BackToTop />

        {/* JS Files */}
        <script src="/js/language-cookie.js" defer></script>
        <script src="/js/jquery.js"></script>
        <script src="/js/swiper-bundle.min.js"></script>
        <script src="/js/aos.js"></script>
        <script src="/js/select2.min.js"></script>
        <script src="/js/lightgallery-all.min.js"></script>
        <script src="/js/ukiyo.min.js"></script>
        <script src="/js/isotope.pkgd.min.js"></script>
        <script src="/js/moment.min.js"></script>
        <script src="/js/daterangepicker.min.js"></script>
        <script src="/js/SmoothScroll.min.js"></script>
        <script src="/js/splitting.min.js"></script>
        <script src="/js/fancybox.umd.js"></script>
        <script src="/js/gsap.min.js"></script>
        <script src="/js/ScrollTrigger.min.js"></script>
        <script src="/js/jquery.trimLines.js"></script>
        <script src="/js/splide.min.js"></script>
        <script src="/js/MotionPathPlugin.min.js"></script>
        <script src="/js/splide-extension-auto-scroll.min.js"></script>
        <script src="/js/locomotive-scroll.min.js"></script>
        <script type="module" src="/js/main.js"></script>
        <script type="module" src="/js/mona-frontend.js"></script>
      </body>
    </html>
  )
}