import "./Navbar.css"

export default function Navbar() {
    return (
        <nav>
            <img src="./Logo.png" alt="" />
            <div>
                <a href="/">
                <i className="bi bi-easel-fill"></i>
                    Projetos
                </a>
                <a href="https://www.linkedin.com/in/erika-dias-608359266/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin"></i>
                    LinkedIn
                </a>
                <a href="https://github.com/ErikaDias2" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github"></i>
                    Github
                </a>
            </div>
        </nav>
    )
}