import './App.css'
import backgroundImage from './assets/bg-desktop.svg'
import logo from './assets/logo.svg'
import mockup from './assets/illustration-mockups.svg'

function App() {
    const styles = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
    };
    return (
        <body className="bg-violet font-poppins" style={styles}>
            <header className="w-36 pt-10 ml-20">
                <img src={logo} alt="logo" />
            </header>
            <div className="flex">
            <div className="left-side w-2/5 mt-20 ml-20" >
                <img src={mockup} alt="mockup" />
            </div>

            <div className="right-side w-5/12 ml-20 mt-32 text-white">
        
                <h3 className="w-96 leading-snug text-3xl font-semibold">Build The Community Your Fans Will Love</h3>
                <p className="mt-4 w-[500px] text-white text-opacity-70">
                    Huddle re-imagines the way we build communities. You have a voice, but so does your audience.
                   Create connections with your users as you engage in genuine discussion.</p>
                <button className="w-36 h-10 bg-white text-violet text-sm rounded-3xl mt-4 shadow hover:bg-soft-magenta hover:text-white">Register</button>
            </div>
        </div>
        </body>
    )
}

export default App
