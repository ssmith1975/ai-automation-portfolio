const Footer = () => {

    return (            

        <footer className="bg-background text-center py-6 mt-12 border-t border-border">
            <div className="mb-4">
                <a  href="/" className="text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300 mx-2 dark:text-sky-200">
                    HOME
                </a>
                <a href="/#services" className="text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300 mx-2 dark:text-sky-200">
                    SERVICES
                </a>
                <a href="/use-cases" className="text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300 mx-2 dark:text-sky-200">
                    USE CASES
                </a>
                <a href="/workflows" className="text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300 mx-2 dark:text-sky-200">
                    WORKFLOWS
                </a>    
                <a href="/about" className="text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300 mx-2 dark:text-sky-200">
                    ABOUT
                </a>
                {/* <a href="/blog" className="text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300 mx-2">
                    BLOG
                </a> */}
                <a href="/contact" className="text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300 mx-2 dark:text-sky-200">
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