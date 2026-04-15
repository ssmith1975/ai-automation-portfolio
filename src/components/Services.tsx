const Services = () => {
    const services = [
        {
            number: '01',
            title: 'NO-CODE WORKFLOW AUTOMATIONS',
            description:
                'Creating seamless, efficient workflows without writing a single line of code, empowering businesses to automate tasks and processes with ease'
        },
        {
            number: '02',
            title: "API'S, WEBHOOKS, AND INTEGRATIONS",
            description:
                'Integrating various APIs, webhooks, and third-party services to create powerful and interconnected AI-driven solutions'
        },
        {
            number: '03',
            title: 'AUTOMATED CONTENT CREATION',
            description:
                'Automating the creation of content such as articles, reports, and marketing materials using AI tools and workflows'
        },
        {
            number: '04',
            title: 'LEAD GENERATION SYSTEMS',
            description:
                'Creating automated lead generation systems that capture and nurture potential customers through AI-driven strategies'
        },
        {
            number: '05',
            title: 'DATA EXTRACTION & PARSING',
            description:
                'Extracting and parsing data from various sources to support AI workflows'
        },
        {
            number: '06',
            title: 'AI-POWERED CHATBOTS',
            description:
                'Creating intelligent chatbots powered by AI to enhance customer interactions and support'
        }
    ]
    return (
        <section className="py-32 bg-background" id="services">
            <div className="container mx-auto px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20">
                        <h2 className="text-minimal text-muted-foreground mb-4">
                            SERVICES
                        </h2>
                        <h3 className="text-4xl md:text-6xl font-light text-architectural">
                            AI Automation Services
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
                        {services.map((service, index) => (
                            <div key={index} className="group">
                                <div className="flex items-start space-x-6">
                                    <span className="text-minimal text-muted-foreground font-medium">
                                        {service.number}
                                    </span>
                                    <div>
                                        <h4 className="text-2xl font-light mb-4 text-architectural group-hover:text-muted-foreground transition-colors duration-500">
                                            {service.title}
                                        </h4>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Services
