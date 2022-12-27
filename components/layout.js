import Nav from './Nav';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <div className="container relative mx-auto flex min-h-full flex-col items-stretch px-3 pt-5 xl:max-w-7xl">
        <Nav />
        <div className="relative w-full flex-1 pt-11 pb-32 xl:px-16">
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
