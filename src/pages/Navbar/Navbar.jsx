import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <>
        <div><Link to="/">Home</Link></div>
        <div><Link to="/apple">Apple</Link></div>
        <div><Link to="/apricot">Apricot</Link></div>
        <div><Link to="/lime">Lime</Link></div>
        <div><Link to="/lychee">Lychee</Link></div>
        </>
    )
}

export default Navbar