import { Link } from 'react-router-dom'
import Navigation from '@/components/Navigation'
import { workflows } from '@/data/workflows'

const Workflow = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-12">
                            <h1 className="text-6xl md:text-8xl font-light text-architectural mb-8">
                                WORKFLOWS
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-3xl">
                                Exploring the transformative impact of AI
                                through real-world applications and workflows.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Case Posts Grid */}
            <section className="pb-32">
                <div className="container mx-auto px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                            {workflows.map((workflow) => (
                                <article key={workflow.id} className="group">
                                    <Link
                                        key={workflow.id}
                                        to={`/workflows/${workflow.id}`}
                                        className="group"
                                    >
                                        <div className="w-full h-48 mb-4 overflow-hidden">
                                            <img
                                                src={workflow.thumbnail}
                                                alt={workflow.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                        <h4 className="text-lg font-light text-architectural group-hover:text-muted-foreground transition-colors duration-300 mb-2">
                                            {workflow.name}
                                        </h4>
                                        <p className="text-minimal text-muted-foreground">
                                            {workflow.excerpt}
                                        </p>
                                    </Link>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Workflow
