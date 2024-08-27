import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import notes from '../notes.jsx'

const App = () => {
    return(
        <div>
            <Header />
            {notes.map(nota =>
                <Note  
                key= {nota.key}
                titulo= {nota.title}
                nota= {nota.content}
                />
            )}
            <Footer />
        </div>
    )
}


export default App