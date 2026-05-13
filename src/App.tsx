import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

import ScrollToTop from "@/components/ScrollToTop";

import HomePage from "@/pages/Home";
import PropertiesPage from "@/pages/Properties";
import ServicesPage from "@/pages/Services";
import AboutPage from "@/pages/About";
import ContactPage from "@/pages/Contact";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsConditions from "@/pages/TermsConditions";
import NotFoundPage from "@/pages/NotFound";

export default function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />

      <Header />

      <main className="pt-20 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Routes location={location}>
              <Route
                path="/"
                element={<HomePage />}
              />

              <Route
                path="/properties"
                element={<PropertiesPage />}
              />

              <Route
                path="/services"
                element={<ServicesPage />}
              />

              <Route
                path="/about"
                element={<AboutPage />}
              />

              <Route
                path="/contact"
                element={<ContactPage />}
              />

              <Route
                path="/privacy-policy"
                element={<PrivacyPolicy />}
              />

              <Route
                path="/terms-and-conditions"
                element={<TermsConditions />}
              />

              <Route
                path="*"
                element={<NotFoundPage />}
              />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />

      <WhatsAppFab />
    </>
  );
}