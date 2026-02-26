import { FaGithub, FaLinkedin } from "react-icons/fa"

export function Footer() {
  return (
    <footer
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "var(--spacing-m)",
        backgroundColor: "var(--bg)",
        gap: "1rem",
        width: "100%",
        borderRadius: "var(--border-radius)",
        justifyContent: "space-between"
      }}
    >
      <span 
        style={{
          fontSize: "1.5rem",
          fontFamily: "Jaro"
        }}>dev: yasin-sh / yab-sh</span>
      <div className="flex" style={{gap: "var(--spacing-l)"}}>
        <a
          href="https://github.com/yab-sh"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={32} display="block"/>
        </a>
        <a
          href="https://www.linkedin.com/in/yasin-sh/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={32} display="block"/>
        </a>
      </div>
      
    </footer>
  )
}