const Card = ({ user, handleClick }) => {
  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          backgroundColor: "darkblue",
          borderRadius: "50%",
          // padding: 30,
          height: "100px",
          width: "100px",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <span style={{ color: "white", fontSize: 28 }}>
          {user.name.charAt(0)}
        </span>
      </div>

      <h3>{user.name}</h3>
      <p style={{ color: "darkblue", fontStyle: "italic" }}>@{user.username}</p>

      <div>
        <button
          style={{
            padding: 10,
            borderRadius: 12,
            backgroundColor: "darkblue",
            color: "white",
            borderColor: "transparent",
          }}
          type="submit"
          onClick={() => handleClick(user, true)}
        >
          MORE DETAILS
        </button>
      </div>
    </div>
  );
};

export default Card;
