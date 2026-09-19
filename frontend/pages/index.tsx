import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Landing.module.css";

const features = [
  "Secure JWT authentication",
  "Fast onboarding and login flow",
  "Protected user dashboard",
  "Modern responsive user interface",
];

const faqs = [
  {
    q: "How does authentication work?",
    a: "Users register or log in through the Express API, receive a JWT token, and access protected routes like the dashboard.",
  },
  {
    q: "Can I customize pricing and content?",
    a: "Yes. All landing content and plans are in the frontend source for easy customization.",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Auth Landing App</title>
        <meta
          name="description"
          content="Modern landing page with Next.js frontend, Express auth API, and MongoDB."
        />
      </Head>

      <header className={styles.header}>
        <div className={styles.container}>
          <h1>Auth Landing App</h1>
          <nav className={styles.nav}>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
            <Link href="/login">Login</Link>
            <Link href="/register" className={styles.ctaSmall}>Sign Up</Link>
          </nav>
        </div>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.container}>
            <h2>Build trust with secure and simple authentication.</h2>
            <p>
              A production-ready starter with Next.js, Express, MongoDB, and JWT auth.
            </p>
            <div className={styles.actions}>
              <Link href="/register" className={styles.cta}>Get Started</Link>
              <Link href="/login" className={styles.secondary}>Login</Link>
            </div>
          </div>
        </section>

        <section id="features" className={styles.section}>
          <div className={styles.container}>
            <h3>Features</h3>
            <div className={styles.grid}>
              {features.map((feature) => (
                <article key={feature} className={styles.card}>{feature}</article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className={styles.sectionAlt}>
          <div className={styles.container}>
            <h3>About</h3>
            <p>
              This app is built for teams that need a clean landing page and a secure auth flow without setup friction.
            </p>
          </div>
        </section>

        <section id="pricing" className={styles.section}>
          <div className={styles.container}>
            <h3>Pricing</h3>
            <div className={styles.grid}>
              <article className={styles.card}><strong>Starter</strong><p>$0 / month</p></article>
              <article className={styles.card}><strong>Pro</strong><p>$19 / month</p></article>
              <article className={styles.card}><strong>Business</strong><p>$49 / month</p></article>
            </div>
          </div>
        </section>

        <section id="testimonials" className={styles.sectionAlt}>
          <div className={styles.container}>
            <h3>Testimonials</h3>
            <div className={styles.grid}>
              <article className={styles.card}>“Fast setup and polished UI.”</article>
              <article className={styles.card}>“Auth flow worked right away.”</article>
              <article className={styles.card}>“Great starter for SaaS products.”</article>
            </div>
          </div>
        </section>

        <section id="faq" className={styles.section}>
          <div className={styles.container}>
            <h3>FAQ</h3>
            {faqs.map(({ q, a }) => (
              <article key={q} className={styles.faqItem}>
                <h4>{q}</h4>
                <p>{a}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className={styles.sectionAlt}>
          <div className={styles.container}>
            <h3>Contact</h3>
            <p>Email us at support@example.com for onboarding help.</p>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>© {new Date().getFullYear()} Auth Landing App. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
