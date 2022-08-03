function Footer() {
    return (
        <footer className="page-footer green lighten-3">
            <div className="container">
                
                <div className="footer-copyright">
                    <div className="container">
                        © {new Date().getFullYear()} Copyright Text
                        <a
                            className="grey-text text-lighten-4 right"
                            href="https://github.com/IgorPlakhov/react-shop"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Repo
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export { Footer };