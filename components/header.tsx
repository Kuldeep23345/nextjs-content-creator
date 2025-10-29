"use client";

import { Authenticated, Unauthenticated } from "convex/react";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { useStoreUser } from "@/hooks/useStoreUser";
import { BarLoader } from "react-spinners";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { LayoutDashboard } from "lucide-react";
export const Header = () => {
  const { isLoading, isAuthenticated } = useStoreUser();
  const path = usePathname();

  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-3xl px-4">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-4 sm:px-6 md:px-8 py-3 flex items-center justify-between gap-2">
        <Link href={isAuthenticated ? "/feed" : "/"} className="flex shrink-0">
          <Image
            src={"/logo.png"}
            alt="Creator Logo"
            width={96}
            height={32}
            className="h-8 sm:h-10 w-auto object-contain"
          />
        </Link>
        {path === "/" && (
          <div className="hidden lg:flex space-x-6 flex-1 justify-center">
            <Link
              href={"#features"}
              className="text-white font-medium transition-all duration-300 hover:text-purple-300 cursor-pointer"
            >
              Features
            </Link>
            <Link
              href={"#testimonials"}
              className="text-white font-medium transition-all duration-300 hover:text-purple-300 cursor-pointer"
            >
              Testimonials
            </Link>
          </div>
        )}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <Authenticated>
            <Link href={"/dashboard"}>
              <Button
                variant={"ghost"}
                className="hidden sm:flex cursor-pointer text-white hover:bg-transparent hover:text-white shadow-2xs border border-gray-400/40"
                size={"sm"}
              >
                <LayoutDashboard className="h-4 w-4" />
                <span className="hidden md:inline ml-2">Dashboard</span>
              </Button>
            </Link>
            <UserButton/>
          </Authenticated>

          <Unauthenticated>
            <SignInButton>
              <Button variant={"ghost"} size={"sm"} className="cursor-pointer text-white hover:bg-transparent  hover:text-purple-300 ">
                Sign In
              </Button>
            </SignInButton>
            <SignUpButton>
              <Button
                variant={"primary"}
                size={"sm"}
                className="whitespace-normal cursor-pointer text-white"
              >
                {" "}
                Get Started
              </Button>
            </SignUpButton>
          </Unauthenticated>
        </div>

        {isLoading && (
          <div className="fixed bottom-0 left-0 w-full z-40 flex justify-center">
            <BarLoader width={"95%"} color="#D8B4FE"></BarLoader>
          </div>
        )}
      </div>
    </header>
  );
};
