import { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { apiRequest } from "@/lib/api";
import styles from "@/styles/Auth.module.css";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await apiRequest("/api/auth/login", {
        method: "POST",
        body: { email, password },
      });

      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      router.push("/dashboard");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Login failed";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className={styles.error}>{error}</p>}
        <button type="submit" disabled={loading}>{loading ? "Logging in..." : "Login"}</button>
        <p>
          Don&apos;t have an account? <Link href="/register">Register</Link>
        </p>
      </form>
    </main>
  );
}
