import Header from "./Header";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Header />
      <main className="p-4 pt-3 md:pt-6 min-h-screen">{children}</main>
    </>
  );
};

export default Layout;
