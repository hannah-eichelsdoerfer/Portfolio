import Navbar from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main className="w-3/4 m-auto">{children}</main>
    </>
  );
};

export default Layout;
