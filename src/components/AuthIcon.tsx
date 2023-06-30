import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { VscAccount } from "react-icons/vsc";

export default function AuthIcon() {
  const { data: sessiondata } = useSession();
  const user = sessiondata?.user;

  if (user && user.name != null) {
    return (
      <button>
        {user.image && user.image != null && user.image != undefined ? (
          <Image
            src={user.image}
            alt="Your Profile Picture"
            width={24}
            height={24}
          />
        ) : (
          <VscAccount />
        )}
      </button>
    );
  }
  return <button onClick={() => void signIn()}>Login</button>;
}
