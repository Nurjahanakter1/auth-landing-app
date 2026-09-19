import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { apiRequest } from "@/lib/api";
import styles from "@/styles/Dashboard.module.css";

type User = {
  name: string;
  email: string;
  createdAt: string;
};

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        router.replace("/login");
        return;
      }

      try {
        const data = await apiRequest("/api/auth/me", { token });
        setUser(data.user);
      } catch (err) {
        const message = err instanceof Error ? err.message : "Unable to load dashboard";
        setError(message);
        localStorage.removeItem("token");
        router.replace("/login");
      }
    };

    loadUser();
  }, [router]);

  const handleLogout = async () => {
    const token = localStorage.getItem("token");

    try {
      await apiRequest("/api/auth/logout", { method: "POST", token });
    } finally {
      localStorage.removeItem("token");
      router.push("/login");
    }
  };

  return (
    <main className={styles.wrapper}>
      <section className={styles.card}>
        <h1>Dashboard</h1>
        {error && <p>{error}</p>}
        {!user && !error && <p>Loading profile...</p>}
        {user && (
          <>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Joined:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
          </>
        )}
        <button onClick={handleLogout} type="button">Logout</button>
      </section>
    </main>
  );
}
