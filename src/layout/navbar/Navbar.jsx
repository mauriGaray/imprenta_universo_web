import "./navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar__container">
      <div className="navbar__div--logo">
        <img
          className="navbar__img--logo"
          src="/img/logo universo.svg"
          alt="Logo"
          class="logo"
          width={225}
        />
      </div>
      <ul className="navbar__div--menu">
        <ol className="navbar__ol--menuItem">INICIO</ol>
        <ol className="navbar__ol--menuItem">NOSOTROS</ol>
        <ol className="navbar__ol--menuItem">SERVICIOS</ol>
        <ol className="navbar__ol--menuItem">PORTFOLIO</ol>
      </ul>
      <div className="navbar__div--contacto">CONTACTO</div>
    </nav>
  );
};

export default Navbar;
