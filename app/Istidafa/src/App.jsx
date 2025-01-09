import { Box, Container, CssBaseline, CssVarsProvider } from "@mui/joy";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollUp";
import Landing from "./pages/landing/Landing";
import Hosting from "./pages/hosting/Hosting";
import Blog from "./pages/blog/Blog";
import BlogPost from "./pages/blog/BlogPost";
import FAQ from "./pages/faq/FAQ";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import SignUp from "./pages/auth/SignUp";
import LogIn from "./pages/auth/LogIn";
import Features from "./pages/features/Features";
import Services from "./pages/services/Services";
import ServicesDetails from "./pages/services/ServicesDetails";
import Checkout from "./pages/hosting/Checkout";
import NotFound from "./pages/notFound/NotFound";
import Domain from "./pages/domain/Domain";


const Layout = ({ children }) => {
  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          px: { xs: 2, sm: 3, md: 3 },
          py: { xs: 5, md: 10 },
        }}
      >
        {children}
      </Container>
    </Box>
  );
};

function App() {
  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <ScrollToTop />
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="*"
          element={
            <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
              <Header />
              <Layout>
                <Routes>
                  <Route path="/" element={<Landing />} />
                  <Route path="/hosting" element={<Hosting />} />
                  <Route path="/hosting/:type" element={<Checkout />} />
                  <Route path="/domain" element={<Domain />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                  <Route path="/features" element={<Features />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/services/:slug" element={<ServicesDetails />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/about" element={<About />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Layout>
              <Footer />
            </Box>
          }
        />
      </Routes>
    </CssVarsProvider>
  );
}
export default App;