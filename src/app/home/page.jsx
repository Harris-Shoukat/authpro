// "use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { supabase } from "../lib/supabaseClient";

// export default function HomePage() {
//   const router = useRouter();
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const checkUser = async () => {
//       const { data: { user } } = await supabase.auth.getUser()
//       console.log(data);
      
//       if (user) {
//         setUser(user);
//       } else {
//         router.push('/login');
//       }
//       setLoading(false);
//     }
//     checkUser()
//   }, [router])

//   const handleLogout = async () => {
//     await supabase.auth.signOut();
//     router.push("/login");
//   };

//   if (loading) {
//     return <p style={{ textAlign: "center", marginTop: 50 }}>Loading...</p>;
//   }

//   return (
//     <div style={{ textAlign: "center", marginTop: "100px" }}>
//       {user && (
//         <>
//           <h1>Welcome,  👋</h1>
//           <p>You are logged in as {user.email}</p>
//           <button onClick={handleLogout} style={{ marginTop: 20, padding: "8px 16px" }}>
//             Logout
//           </button>
//         </>
//       )}
//     </div>
//   );
// }
