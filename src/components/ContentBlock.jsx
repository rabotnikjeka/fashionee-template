const ContentBlock = ({ children }) => {
  return (
    <main className="container" data-testid="content-block">
      {children}
    </main>
  );
};

export default ContentBlock;
