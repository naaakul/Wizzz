"use client";

import React from "react";
import { useAuth } from "@/firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Bg from "@/components/background";
import Image from "next/image";

const GameDashboard = () => {
  const { user, userData, loading } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (!loading && !user) {
      router.push("/auth/signin");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!user || !userData) return null;

  return (
    <div className="w-full h-screen flex items-center justify-center text-white relative">
      <Bg/>
      <div className="g-zinc-950 border border-zinc-900 rounded-2xl p-10 shadow-xl w-full max-w-sm text-center z-10">
        <Image src={"/t-logo.png"} alt="" height={1000} width={1000} className="h-8 w-10 mx-auto mb-3"></Image>
        <p className="text-zinc-400 mb-10">Choose your action to get started</p>
        <div className="flex flex-col gap-4">
          <Link href="/game/create">
            <div className="bg-white text-black py-3 rounded-xl text-lg font-semibold hover:opacity-90 transition-opacity">
              Create Quiz
            </div>
          </Link>

          <Link href="/game/join">
            <div className="bg-zinc-800 text-white py-3 rounded-xl text-lg font-semibold hover:opacity-90 transition-opacity">
              Join Quiz
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameDashboard;
