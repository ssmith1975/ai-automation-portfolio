import { Link } from 'react-router-dom';
import { useCasePosts } from '@/data/useCasePosts';

const UseCaseList = (cases) => {
    return (
      
                <div className="container mx-auto px-6">
                  <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                      {useCasePosts.map((useCase) => (
                        <article key={useCase.id} className="group">
                          <Link to={`/use-cases/${useCase.id}`} className="block">
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
                                <span>{useCase.date}</span>                                
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
    )
}

export default UseCaseList;