import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {

    //console.log(Component)
    //console.log(pageProps)
    return (
        <div className="container">
            <Header/>
            <Component {...pageProps}/>   
            <Footer/> 
        </div>
    )
}

export default MyApp