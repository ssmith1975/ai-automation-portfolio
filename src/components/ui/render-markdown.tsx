import Zoom from 'react-medium-image-zoom'

function renderMarkdownBold(mdText) {
    // Replace **some text** with <strong>some text</strong>
    return mdText.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
}

function renderMarkdownItalic(mdText) {
    // Replace _some text_ with <em>some text</em>
    return mdText.replace(/__(.+?)__/g, '<em>$1</em>')
}

const RenderMarkdown = ({ line }) => {
    let processedLine = line

    if (line.trim() === '') {
        // Empty line

        return
    }

    if (line.startsWith('# ')) {
        // H1

        processedLine = (
            <h1 className="text-3xl md:text-4xl font-light text-architectural mb-8 mt-20 dark:text-sky-600">
                {line.substring(2)}
            </h1>
        )
    } else if (line.startsWith('## ')) {
        // H2

        processedLine = (
            <h2 className="text-2xl md:text-3xl font-light text-architectural mb-6 mt-18 pt-10 text-sky-600 dark:text-sky-200">
                <span className="pt-4">{line.substring(3)} </span>
            </h2>
        )
    } else if (line.startsWith('### ')) {
        // H3

        processedLine = (
            <h3 className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-400">
                <span className="block mt-16">{line.substring(4)}</span>
            </h3>
        )
    } else if (line.startsWith('#### ')) {
        // H4

        processedLine = (
            <h4 className="text-xl font-bold md:text-xl font-medium text-foreground mb-4  italic">
                <span className="block mt-14">{line.substring(4)}</span>
            </h4>
        )
    } else if (line.startsWith('- ') || line.startsWith('* ')) {
        // list item
        const listItemContent = renderMarkdownItalic(
            renderMarkdownBold(line.substring(2))
        )
        return (
            <li
                className="ml-6 mb-0 marker:text-sky-500 marker:text-2xl"
                dangerouslySetInnerHTML={{
                    __html: listItemContent
                }}
            />
        )
    } else if (
        //Link
        line.startsWith('[') &&
        line.includes('](') &&
        line.endsWith(')')
    ) {
        const linkText = line.substring(
            line.indexOf('[') + 1,
            line.indexOf('](')
        )

        const linkUrl = line.substring(line.indexOf('](') + 2, line.length - 1)

        processedLine = (
            <a
                href={linkUrl}
                className="text-architectural cursor-pointer text-blue-400 underline hover:text-muted-foreground transition-colors duration-300 after:content-['_↗']"
                target="_blank"
            >
                {linkText}
            </a>
        )
    } else if (
        //Image
        line.startsWith('![') &&
        line.includes('](') &&
        line.endsWith(')')
    ) {
        const altText = line.substring(
            line.indexOf('![') + 2,
            line.indexOf('](')
        )

        const imageUrl = line.substring(line.indexOf('](') + 2, line.length - 1)

        processedLine = (
            <div className="w-full h-full object-cover pt-6">
                <figure>
                    <Zoom>
                        <img
                            src={imageUrl}
                            alt={altText}
                            className="w-full h-full object-cover p-6 drop-shadow-xl"
                        />
                        <figcaption className="text-xl text-foreground mt-6 text-center text-italic text-size-2xl">
                            <em>{altText}</em> — Click on the image to enlarge
                            it.
                        </figcaption>
                    </Zoom>
                </figure>
            </div>
        )
    } else if (line.startsWith("'''") && line.endsWith("'''")) {
        processedLine = (
            <code className="bg-muted p-4 rounded-md overflow-x-auto block whitespace-pre">
                {line.substring(3, line.length - 3)}
            </code>
        )
    } else {
        const paragraphContent = renderMarkdownItalic(renderMarkdownBold(line))
        processedLine = (
            <p
                className="mt-3 mb-0"
                dangerouslySetInnerHTML={{
                    __html: paragraphContent
                }}
            />
        )
    }

    //processedLine = renderMarkdownBold(processedLine);
    //processedLine = renderMarkdownItalic(processedLine);

    return processedLine
}

export default RenderMarkdown
