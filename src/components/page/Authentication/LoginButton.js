import Link from "next/link";
import auth0 from "auth0-js";

function LoginButton() {
  var webAuth = new auth0.WebAuth({
    clientID: "{yourClientId}",
    domain: "{yourDomain}",
    redirectUri: "http://example.com",
    responseType: "token id_token",
  });

  return (
    <div>
      <h1>Login With PasswordLess Method</h1>
      <Link className="btn btn-accent" href="/api/auth/login">
        Login
      </Link>
    </div>
  );
}

export default LoginButton;
