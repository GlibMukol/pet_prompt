"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const isUserLoggedIn = true;
  const [providers, setProviders] = useState(null);
  useEffect(() => {
    const setProvider = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setProvider();
  }, []);
  return (
    <nav className="flex flex-between w-full mb-16 pt-6">
      <Link href="/" className="flex flex-center gap-2 ">
        {" "}
        <Image
          src="/assets/images/logo.svg"
          alt="PetPromps"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">PetPrompts</p>
      </Link>
      <div className="flex">
        {isUserLoggedIn ? (
          <div className="flex flex-between space-x-5">
            <Link href="/create-prompt" className="black_btn">
              Create Posts
            </Link>
            <button className="outline_btn " type="button" onClick={signOut}>
              SignOut
            </button>
            <Link href="/profile">
              {" "}
              <Image
                src="/assets/images/logo.svg"
                width={37}
                height={37}
                className="rounded-fill"
                alt="profile image"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  SignIn
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
