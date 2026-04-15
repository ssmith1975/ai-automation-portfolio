import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-md border-b border-border max-h-16">
            <div className="container mx-auto px-6 py-auto flex items-center justify-between">
                <div className="text-minimal text-foreground">
                    <Link
                        to="/"
                        className="hover:text-muted-foreground transition-colors duration-300 cursor-pointer"
                    >
                        <svg
                            id="logo"
                            viewBox="0 0 225 80"
                            width="225"
                            height="60"
                            className="inline-block mr-2 logo hover:text-sky-600 transition-colors duration-300"
                        >
                            <circle
                                cx="40"
                                cy="40"
                                r="20"
                                opacity="0.3"
                                className="fill-sky-500"
                            />
                            <circle
                                cx="30"
                                cy="35"
                                r="4"
                                className="fill-sky-500"
                            />
                            <circle
                                cx="40"
                                cy="30"
                                r="4"
                                className="fill-sky-500"
                            />
                            <circle
                                cx="50"
                                cy="35"
                                r="4"
                                className="fill-sky-500"
                            />
                            <circle
                                cx="35"
                                cy="45"
                                r="4"
                                className="fill-sky-500"
                            />
                            <circle
                                cx="45"
                                cy="45"
                                r="4"
                                className="fill-sky-500"
                            />
                            <line
                                x1="30"
                                y1="35"
                                x2="40"
                                y2="30"
                                className="stroke-sky-500"
                                stroke-width="1.5"
                            />
                            <line
                                x1="40"
                                y1="30"
                                x2="50"
                                y2="35"
                                className="stroke-sky-500"
                                stroke-width="1.5"
                            />
                            <line
                                x1="30"
                                y1="35"
                                x2="35"
                                y2="45"
                                className="stroke-sky-500"
                                stroke-width="1.5"
                            />
                            <line
                                x1="50"
                                y1="35"
                                x2="45"
                                y2="45"
                                className="stroke-sky-500"
                                stroke-width="1.5"
                            />
                            <text
                                x="75"
                                y="48"
                                font-family="Arial, sans-serif"
                                font-size="28"
                                font-weight="bold"
                                fill="currentColor"
                            >
                                ssmith-ai
                            </text>
                        </svg>
                    </Link>
                </div>

                <div className="hidden md:flex items-center space-x-12">
                    <Link
                        to="/"
                        className="text-minimal text-muted-foreground cursor-pointer hover:text-foreground transition-colors duration-300 dark:text-sky-200"
                        aria-label="Home"
                    >
                        HOME
                    </Link>
                    <HashLink
                        to="/#services"
                        className="text-minimal text-muted-foreground cursor-pointer hover:text-foreground transition-colors duration-300 dark:text-sky-200"
                        aria-label="Services"
                    >
                        SERVICES
                    </HashLink>
                    <Link
                        to="/use-cases"
                        className="text-minimal text-muted-foreground cursor-pointer hover:text-foreground transition-colors duration-300 dark:text-sky-200"
                        aria-label="Use Cases"
                    >
                        USE CASES
                    </Link>
                    <Link
                        to="/workflows"
                        className="text-minimal text-muted-foreground cursor-pointer hover:text-foreground transition-colors duration-300 dark:text-sky-200"
                        aria-label="Workflows"
                    >
                        WORKFLOWS
                    </Link>

                    <Link
                        to="/about"
                        className="text-minimal text-muted-foreground cursor-pointer hover:text-foreground transition-colors duration-300 dark:text-sky-200"
                        aria-label="About"
                    >
                        ABOUT
                    </Link>

                    <Link
                        to="/contact"
                        className="text-minimal text-muted-foreground cursor-pointer hover:text-foreground transition-colors duration-300 dark:text-sky-200"
                        aria-label="Contact"
                    >
                        CONTACT
                    </Link>
                </div>

                <div className="hidden md:flex items-center space-x-4">
                    <ThemeToggle />
                </div>

                <Button
                    variant="ghost"
                    size="sm"
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? '✕' : '☰'}
                </Button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-background border-b border-border">
                    <div className="container mx-auto px-6 py-6 space-y-4">
                        <Link
                            to="/"
                            className="block text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300"
                            aria-label="Home"
                        >
                            HOME
                        </Link>
                        <Link
                            to="/services"
                            className="block text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300"
                            aria-label="Services"
                        >
                            SERVICES
                        </Link>
                        <Link
                            to="/use-cases"
                            className="block text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300"
                            aria-label="Use Cases"
                        >
                            USE CASES
                        </Link>
                        <Link
                            to="/workflows"
                            className="block text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300"
                            aria-label="Workflows"
                        >
                            WORKFLOWS
                        </Link>

                        <Link
                            to="/about"
                            className="block text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300"
                            aria-label="About"
                        >
                            ABOUT
                        </Link>
                        <Link
                            to="/blog"
                            className="block text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300"
                            aria-label="Blog"
                        >
                            BLOG
                        </Link>
                        <Link
                            to="/contact"
                            className="block text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300"
                            aria-label="Contact"
                        >
                            CONTACT
                        </Link>

                        {/* Mobile Theme Toggle */}
                        <div className="pt-4 border-t border-border sm:pl-6">
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navigation
