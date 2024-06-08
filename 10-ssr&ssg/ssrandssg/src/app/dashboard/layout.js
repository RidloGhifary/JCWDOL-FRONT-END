export default function Layout({ children, admin, user }) {
  return (
    <>
      {children}
      {true ? admin : user}
    </>
  );
}
