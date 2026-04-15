import Navigation from '@/components/Navigation'
import githubIcon from '@/assets/icons/github-icon-32x32.svg'

const About = () => {
    return (
        <div className="min-h-screen">
            <Navigation />
            <section className="pt-32 pb-32 bg-background">
                <div className="container mx-auto px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-20 items-center">
                            <div>
                                <h1 className="text-minimal text-muted-foreground mb-4">
                                    ABOUT
                                </h1>
                                <h2 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                                    My Technology Journey
                                </h2>

                                <div className="space-y-8">
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        I believe in the transformative power of
                                        technology to solve complex problems and
                                        create meaningful experiences. With a
                                        background in software development and a
                                        passion for innovation, I have dedicated
                                        myself to mastering the tools and
                                        techniques that drive the future of AI.
                                    </p>

                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        Starting from building simple HTML
                                        websites to developing complex AI-driven
                                        applications, my journey has been one of
                                        continuous learning and growth.
                                    </p>

                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        Began coding basic HTML code around
                                        2005, my path has expanded to building
                                        effective UI frontends, backends,
                                        database developments, working with CMS
                                        such as Sharepoint, dynamic JavaScript
                                        frameworks, and cloud development. Each
                                        project begins with careful listening
                                        and ends with thoughtful execution.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-12">
                                <div>
                                    <h3 className="text-minimal text-muted-foreground mb-6">
                                        APPROACH
                                    </h3>

                                    <div className="space-y-6">
                                        <div className="border-l-2 border-architectural pl-6">
                                            <h4 className="text-lg font-medium mb-2">
                                                Research
                                            </h4>
                                            <p className="text-muted-foreground">
                                                Keeping up with latest
                                                technologies and best practices
                                            </p>
                                        </div>
                                        <div className="border-l-2 border-architectural pl-6">
                                            <h4 className="text-lg font-medium mb-2">
                                                Collaboration
                                            </h4>
                                            <p className="text-muted-foreground">
                                                Working closely with clients and
                                                team members to ensure alignment
                                                and shared understanding
                                            </p>
                                        </div>
                                        <div className="border-l-2 border-architectural pl-6">
                                            <h5 className="text-lg font-medium mb-2">
                                                Practice, Practice, Practice
                                            </h5>
                                            <p className="text-muted-foreground">
                                                Sharpen skills through
                                                consistent practice and
                                                experimentation
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-border">
                                    <div>
                                        <h4 className="text-minimal text-muted-foreground mb-2">
                                            DEVELOPING SOFTWARE SINCE
                                        </h4>
                                        <p className="text-xl">2005</p>
                                    </div>
                                    <div>
                                        <h4 className="text-minimal text-muted-foreground mb-2">
                                            PROJECTS
                                        </h4>
                                        <p className="text-xl">40+</p>
                                    </div>

                                    <div className="mt-12 p-8 bg-color bg-white">
                                        <h3 className="text-minimal text-black mb-2">
                                            <span className="text-muted inline-block mb-6">
                                                Links
                                            </span>
                                            <a
                                                href="https://github.com/ssmith1975?tab=repositories"
                                                aria-label="Visit GitHub profile"
                                                className="text-xl block hover:text-sky-800 hover:cursor-pointer after:content-['_↗']"
                                            >
                                                <span className="inline-block align-middle mr-2 text-foreground">
                                                    <img
                                                        src={githubIcon}
                                                        alt="GitHub"
                                                        width="32"
                                                        height="32"
                                                    />
                                                </span>
                                                <span className="inline-block">
                                                    GITHUB REPOSITORY
                                                </span>
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
