export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <h1>
            Hey, I’m <span className="highlight">Lakshitha</span> — a frontend developer crafting clean,
            accessible interfaces.
          </h1>
          <p>
            I build fast, responsive web apps with React and a focus on great UX.
            I love design systems, delightful micro‑interactions, and type safety.
          </p>
          <div className="buttons">
            <a className="btn" href="#projects">View my work</a>
            <a className="btn secondary" href="#contact">Get in touch</a>
          </div>
        </div>

        <div className="avatar-wrap">
          <img
            className="avatar"
            src="https://i.pinimg.com/1200x/04/1d/16/041d1627aea688511c762e7474da5600.jpg"
            alt="Your portrait"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}