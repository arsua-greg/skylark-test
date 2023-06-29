import Link from "next/link";

function Logoutbutton() {
  return (
    <div className="mt-5">
      <Link className="btn btn-error" href="/api/auth/logout">
        Logout
      </Link>
    </div>
  );
}

export default Logoutbutton;
