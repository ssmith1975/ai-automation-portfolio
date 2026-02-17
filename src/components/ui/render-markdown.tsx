import Zoom from "react-medium-image-zoom";

const RenderMarkdown = ({ line }) => {
  if (line.startsWith("# ")) {
    // H1

    return (
      <h1 className="text-3xl md:text-4xl font-light text-architectural mb-8">
        {line.substring(2)}
      </h1>
    );
  } else if (line.startsWith("## ")) {
    // H2

    return (
      <h2 className="text-2xl md:text-3xl font-light text-architectural mb-6 mt-12">
        <span className="pt-4">{line.substring(3)} </span>
       
      </h2>
    );
  } else if (line.startsWith("### ")) {
    // H3

    return (
      <h3 className="text-xl md:text-2xl font-medium text-foreground mb-4 mt-10">
        {line.substring(4)}
      </h3>
    );
  } else if (
    // List item with bold text
    line.startsWith("- **") &&
    line.endsWith("**")
  ) {
    const content = line.substring(4, line.length - 2);
    return (
      <li className="ml-10 mt-0 mb-0 pt-0">
        <strong className="text-foreground">{content}</strong>
      </li>
    );
  } else if (line.startsWith("- ") || line.startsWith("* ")) {
    // Regular list item

    return <li className="ml-6 mb-0">{line.substring(2)}</li>;
  } else if (line.trim() === "") {
    // Empty line

    return;
  } else if (line.startsWith("**") && line.endsWith("**")) {
    // Bold paragraph

    return (
      <p className="mb-2 columns-2 gap-8">
        <strong className="text-foreground">
          {line.substring(2, line.length - 2)}
        </strong>
      </p>
    );
  } else if (line.startsWith("__") && line.endsWith("__")) {
    // Bold paragraph

    return (
      <p className="mb-0">
        <em className="text-foreground">
          {line.substring(2, line.length - 2)}
        </em>
      </p>
    );
  } else if (
    //Link
    line.startsWith("[") &&
    line.includes("](") &&
    line.endsWith(")")
  ) {
    const linkText = line.substring(line.indexOf("[") + 1, line.indexOf("]("));

    const linkUrl = line.substring(line.indexOf("](") + 2, line.length - 1);

    return (
      <a
        href={linkUrl}
        className="text-architectural text-blue-400 underline hover:text-muted-foreground transition-colors duration-300"
        target="_blank"
      >
        {linkText}
      </a>
    );
  } else if (
    //Image
    line.startsWith("![") &&
    line.includes("](") &&
    line.endsWith(")")
  ) {
    const altText = line.substring(line.indexOf("![") + 2, line.indexOf("]("));

    const imageUrl = line.substring(line.indexOf("](") + 2, line.length - 1);

    return (
      <div className="w-full h-full object-cover">
        <figure>
          <Zoom>
            <img
              src={imageUrl}
              alt={altText}
              className="w-full h-full object-cover"
            />
            <figcaption className="text-sm text-muted-foreground">
              {altText} -- Click on the image to enlarge it.
            </figcaption>
          </Zoom>
        </figure>
      </div>
    );
  } else {
    return <p className="mt-3 mb-0">{line}</p>;
  }
};

export default RenderMarkdown;
