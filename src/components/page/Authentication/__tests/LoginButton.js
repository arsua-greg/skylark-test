import Link from "next/link";

function LoginButton() {
  return (
    <div>
      <Link className="btn btn-accent" href="/api/auth/login">
        Login
      </Link>
    </div>
  );
}

export default LoginButton;
