import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navigation from '@/components/Navigation'
import { useCasePosts } from '@/data/useCasePosts'

const UseCase = () => {
    const [activeCategory, setActiveCategory] = useState('ALL')

    const categories = ['ALL', 'SUSTAINABILITY', 'DESIGN', 'URBAN PLANNING']

    const filteredPosts =
        activeCategory === 'ALL'
            ? useCasePosts
            : useCasePosts.filter((post) => post.category === activeCategory)

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-12">
                            <h1 className="text-6xl md:text-8xl font-light text-architectural mb-8">
                                USE CASES
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-3xl">
                                Exploring the transformative impact of AI
                                through real-world applications and use cases.
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
                            {filteredPosts.map((useCase) => (
                                <article key={useCase.id} className="group">
                                    <Link
                                        to={`/use-cases/${useCase.id}`}
                                        className="block"
                                    >
                                        <div className="relative overflow-hidden mb-6">
                                            <img
                                                src={useCase.image}
                                                alt={useCase.title}
                                                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                            {/* Category Badge */}
                                            <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1">
                                                <span className="text-xs text-foreground font-medium">
                                                    {useCase.category}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex items-center text-xs text-muted-foreground space-x-4">
                                                <span>
                                                    Created: {useCase.date}
                                                </span>
                                            </div>

                                            <h2 className="text-xl lg:text-2xl font-light text-architectural group-hover:text-muted-foreground transition-colors duration-500">
                                                {useCase.title}
                                            </h2>

                                            <p className="text-muted-foreground leading-relaxed line-clamp-3">
                                                {useCase.excerpt}
                                            </p>

                                            <div className="pt-4">
                                                <span className="text-minimal text-foreground hover:text-muted-foreground transition-colors duration-300 relative group-hover:underline">
                                                    READ MORE
                                                </span>
                                            </div>
                                        </div>
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

export default UseCase
