import './globals.css';
import '@/lib/fontawesome';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import Header from '@/components/Header';
import ReduxProvider from '@/redux/ReduxProvider';

export const metadata = {
  title: 'EXPEDITORS GLOBAL - Giải pháp cho doanh nghiệp',
  description: 'EXPEDITORS GLOBAL - Cung cấp các giải pháp toàn trình, vận chuyển Quốc tế, kho vận, TMĐT Quốc tế và Xuất Nhập khẩu cho doanh nghiệp.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="vi-VN">
      <head>
        <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, width=device-width" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="keywords" content="vận chuyển quốc tế, kho vận, xuất nhập khẩu, thương mại điện tử quốc tế, giải pháp logistics, dịch vụ logistics cho doanh nghiệp" />
        <meta name="author" content="EXPEDITORS GLOBAL" />
        <meta name="copyright" content="EXPEDITORS GLOBAL" />
        <meta name="language" content="Vietnamese" />
        <meta name="revisit-after" content="1 days" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        {/* CSS Files */}
        {/* <link rel="stylesheet" href="/css/style.min.css" /> */}
        <link rel="stylesheet" href="/css/styles.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/style(1).css" />
        <link rel="stylesheet" href="/css/backdoor.css" />
        <link rel="stylesheet" href="/css/mona-custom.css" />
        <link rel="stylesheet" href="/css/update.css" />

        {/* Favicon */}
        <link rel="icon" href="/images/logo.svg" sizes="32x32" />
        <link rel="icon" href="/images/images/logo.svg" sizes="192x192" />
        <link rel="apple-touch-icon" href="/images/images/logo.svg" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className="home page-template page-template-page-template page-template-home-template page-template-page-templatehome-template-php page page-id-8 wp-custom-logo desktop-detect">
        <ReduxProvider>
          <Header />
          {children}
          <Footer />
          <BackToTop />
        </ReduxProvider>
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