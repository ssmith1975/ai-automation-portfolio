const Footer = () => {

    return (            

        <footer className="bg-background text-center py-6 mt-12 border-t border-border">
            <div className="mb-4">
                <a  href="/" className="text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300 mx-2">
                    HOME
                </a>
                <a href="/#services" className="text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300 mx-2">
                    SERVICES
                </a>
                <a href="/use-cases" className="text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300 mx-2">
                    USE CASES
                </a>
                <a href="/workflows" className="text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300 mx-2">
                    WORKFLOWS
                </a>    
                <a href="/about" className="text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300 mx-2">
                    ABOUT
                </a>
                {/* <a href="/blog" className="text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300 mx-2">
                    BLOG
                </a> */}
                <a href="/contact" className="text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300 mx-2">
                    CONTACT
                </a>        
               </div>
               
            <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()}  ssmith1975-ai. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;