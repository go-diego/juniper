export default function Image(props) {
    const {src, ratio = null, shape = null, caption = null, className} = props;
    return (
        <figure className={`image ${ratio && `is-${ratio}`} ${className}`}>
            <img className={shape ? `${shape}` : null} src={src} />
            {caption && <p className="py-3 has-text-grey-light has-text-centered">{caption}</p>}
        </figure>
    );
}
