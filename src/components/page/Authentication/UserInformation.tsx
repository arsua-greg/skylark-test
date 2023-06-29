import { useUser } from "@auth0/nextjs-auth0/client";
import LogoutButton from "./LogoutButton";

function UserInformation() {
  const { user, error, isLoading } = useUser();

  type MyImageProps = {
    imageUrl: string | null | undefined;
  };

  function MyImage({ imageUrl }: MyImageProps) {
    return <img src={imageUrl ?? undefined} alt="" />;
  }

  if (error) {
    <p>{error.message}</p>;
  }

  if (isLoading) {
    return <p>Loading</p>;
  }

  if (user) {
    return (
      <div className="container mx-auto px-5 my-5">
        <MyImage imageUrl={user.picture} />
        <h1>Welcome {user.name}</h1>
        <p>Email: {user.email}</p>
        <LogoutButton />
      </div>
    );
  }

  return <div />;
}

export default UserInformation;
