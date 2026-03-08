import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { useCasePosts } from "@/data/useCasePosts";
import "react-medium-image-zoom/dist/styles.css";
import { getWorkflowsByUseCaseId } from "@/data/workflows";
import RenderMarkdown from "@/components/ui/render-markdown";
//import Divider from "@/components/ui/divider";
import SubFeatureBlock from "@/components/ui/sub-feature-block";

const UseCasePost = () => {
  const { id } = useParams<{ id: string }>();
  const post = useCasePosts.find((p) => p.id === id);

  const displayImage = (src: string, alt: string, width?: string) => {
    const createdImage = `<img 
      src="${src}"
      alt="${alt}"
      style={${width}} 
      className="w-full h-auto object-cover" 
    
    />`;

    //return <Zoom>{createdImage}</Zoom>;

    return createdImage;
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 pb-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-light text-architectural mb-8">
                Post Not Found
              </h1>
              <Link
                to="/use-cases"
                className="text-minimal text-foreground hover:text-muted-foreground transition-colors duration-300"
              >
                ← BACK TO USE CASES
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const workflows = getWorkflowsByUseCaseId(id);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Article Header */}
      <article className="pt-32 pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <Link
              to="/use-cases"
              className="inline-block text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300 mb-12"
            >
              ← BACK TO USE CASE
            </Link>

            {/* Article Meta */}
            <div className="mb-8">
              <div className="flex items-center text-minimal text-muted-foreground space-x-4 mb-6">
                <span className="bg-muted px-3 py-1 text-foreground">
                  {post.category}
                </span>
                <span>{post.date}</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-light text-architectural mb-6">
                {post.title}
              </h1>

              <p className="text-2xl text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            {/* Featured Image */}
            <div className="w-full h-96 mb-20 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <div className="text-muted-foreground leading-relaxed space-y-6 text-lg">
                {post.content.split("\n").map((line, index) => (
                  <RenderMarkdown key={index} line={line} />
                ))}
              </div>
            </div>

            {/* Related Workflows */}

            <SubFeatureBlock title="Related Workflows">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                {workflows &&
                  workflows.map((workflow) => (
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
                  ))}

                {!workflows ||
                  (workflows.length === 0 && (
                    <p className="text-muted-foreground">
                      No related workflows found for this use case.
                    </p>
                  ))}
              </div>
            </SubFeatureBlock>

            {/* Related Use Cases */}
            <SubFeatureBlock title="Related Use Cases">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                {useCasePosts
                  .filter(
                    (p) => p.id !== post.id && p.category === post.category,
                  )
                  .slice(0, 2)
                  .map((relatedUseCase) => (
                    <Link
                      key={relatedUseCase.id}
                      to={`/use-cases/${relatedUseCase.id}`}
                      className="group" >
                      <div className="w-full h-48 mb-4 overflow-hidden">
                        <img
                          src={relatedUseCase.image}
                          alt={relatedUseCase.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <h4 className="text-lg font-light text-architectural group-hover:text-muted-foreground transition-colors duration-300 mb-2">
                        {relatedUseCase.title}
                      </h4>
                    </Link>
                  ))}
              </div>
            </SubFeatureBlock>
          </div>
        </div>
      </article>
    </div>
  );
};

export default UseCasePost;
