import { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { apiRequest } from "@/lib/api";
import styles from "@/styles/Auth.module.css";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await apiRequest("/api/auth/register", {
        method: "POST",
        body: { name, email, password },
      });

      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      router.push("/dashboard");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Registration failed";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>Create Account</h1>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
          minLength={6}
          required
        />
        {error && <p className={styles.error}>{error}</p>}
        <button type="submit" disabled={loading}>{loading ? "Creating..." : "Register"}</button>
        <p>
          Already have an account? <Link href="/login">Login</Link>
        </p>
      </form>
    </main>
  );
}
