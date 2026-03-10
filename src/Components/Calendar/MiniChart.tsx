
const MiniChart = () => {
  const data = [10, 12, 15, 20, 26, 24, 30, 34];
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        gap: "3px",
        height: "30px",
      }}
    >
      {data.map((value, index) => (
        <div
          key={index}
          style={{
            width: "4px",
            height: `${value}px`,
            backgroundColor: "#ff4db8",
            borderRadius: "2px",
          }}
        />
      ))}
    </div>
  );
};

export default MiniChart