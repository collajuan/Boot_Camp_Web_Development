
function Footer() {
    const date = new Date()
    const year = date.getFullYear()
    
    return(
        <footer>
            <p>CopyRight {year}</p>
        </footer>
    )
}

export default Footer