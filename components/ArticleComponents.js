export function Heading1(props) {
    return <h1 className="title" {...props} />;
}

export function Heading2(props) {
    return <h1 className="title is-4" {...props} />;
}

export function Paragraph(props) {
    return <p className="mb-4" {...props} />;
}

export function Preformatted(props) {
    return <pre style={{margin: "16px 0"}} {...props} />;
}
