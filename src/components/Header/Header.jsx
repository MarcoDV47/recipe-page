const Header = ({ name, description, image }) => {
    const imageData = image;
    return (
        <header >
            <img src={imageData?.src} alt={imageData?.alt} />
            <h1>{name}</h1>
            <p>{description}</p>
        </header>
    )
}

export default Header