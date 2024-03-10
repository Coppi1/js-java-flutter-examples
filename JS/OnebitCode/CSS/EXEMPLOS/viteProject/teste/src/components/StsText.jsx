// eslint-disable-next-line react-refresh/only-export-components, react/display-name
export default () => {
  const status = true; // se for false é vermelho, true é branco
  return (
    <h2
      style={{
        color: status ? "white" : "red",
      }}
    >
      Current status: {status ? "ON" : "OFF"}
    </h2>
  );
};
