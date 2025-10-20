"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import HomePage from "./screens/home/page.jsx";
import supabase from "./lib/supabaseClient.js";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      
      if (user) {
        setUser(user);
      } else {
        router.push('/login');
      }
      setLoading(false);
    }
    checkUser()
  }, [router])

  if (loading) {
    return <p style={{ textAlign: "center", marginTop: 50 }}>Loading...</p>;
  }

  return (
    <div>
      {!loading && user && <HomePage user={user} />}
    </div>
  );
}