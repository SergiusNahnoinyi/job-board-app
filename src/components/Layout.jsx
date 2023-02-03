import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="m-2	 mx-auto max-w-screen-2xl bg-slate-50 p-2 sm:px-6 lg:px-8">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
