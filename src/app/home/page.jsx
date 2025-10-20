'use client'
import { useRouter } from 'next/navigation'
import { supabase } from '../lib/supabaseClient'

export default function HomePage({ user }) {
  const router = useRouter()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Welcome, 👋</h1>
      <p>You are logged in as {user.email}</p>
      <button
        onClick={handleLogout}
        style={{ marginTop: 20, padding: '8px 16px' }}
      >
        Logout
      </button>
    </div>
  )
}
