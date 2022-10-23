const Details = ({ user, handleClick }) => {
  if (user) {
    return (
      <div>
        <div
          className="container-details"
          style={{
            backgroundColor: "darkblue",
            borderRadius: 15,
            paddingRight: 20,
            paddingLeft: 20,
            paddingTop: 25,
            paddingBottom: 25,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100%",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <span style={{ color: "white", fontSize: 16 }}>Name</span>
              <span style={{ color: "white", fontSize: 16 }}>{user.name}</span>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <span style={{ color: "white", fontSize: 16 }}>Email</span>
              <span style={{ color: "white", fontSize: 16 }}>{user.email}</span>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <span style={{ color: "white", fontSize: 16 }}>Phone</span>
              <span style={{ color: "white", fontSize: 16 }}>{user.phone}</span>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <span style={{ color: "white", fontSize: 16 }}>Company</span>
              <span style={{ color: "white", fontSize: 16 }}>
                {user.company.name}
              </span>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <span style={{ color: "white", fontSize: 16 }}>Website</span>
              <span style={{ color: "white", fontSize: 16 }}>
                {user.website}
              </span>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <span style={{ color: "white", fontSize: 16 }}>Address</span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}
              >
                <span style={{ color: "white", fontSize: 16 }}>
                  Street : {user.address.street}
                </span>
                <span style={{ color: "white", fontSize: 16 }}>
                  Suite: {user.address.suite}
                </span>
                <span style={{ color: "white", fontSize: 16 }}>
                  City: {user.address.city}
                </span>
                <span style={{ color: "white", fontSize: 16 }}>
                  ZipCode: {user.address.zipcode}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button
            type="submit"
            onClick={() => handleClick(null, false)}
            style={{
              padding: 10,
              borderRadius: 12,
              backgroundColor: "darkblue",
              color: "white",
              borderColor: "transparent",
              marginTop: "10px",
            }}
          >
            &#8592; Back to Users
          </button>
        </div>
      </div>
    );
  }
};

export default Details;
