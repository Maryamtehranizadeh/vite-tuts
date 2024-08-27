function Test() {
  const isLogin = true;
  return (
    <div>
      {isLogin ? (
        <div>
          <button>Dashboard</button>
        </div>
      ) : (
        <div>
          <button>Login</button>
        </div>
      )}
      {isLogin && <button>Logout</button>}
    </div>
  );
}
export default Test;
