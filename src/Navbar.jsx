import { Link } from "react-router-dom";

const Navbar=()=>{
    return(<nav className="navbar bg-primary mb-5 text-dark" data-bs-theme="dark">
    <div className="container-fluid">
    <a className="navbar-brand">CRUD Operation</a>
    <form className="d-flex" role="search">
      <Link to="/create"><button className="btn btn-success" >Create</button></Link>
    </form>
  </div>
  </nav>)
}

export default Navbar;