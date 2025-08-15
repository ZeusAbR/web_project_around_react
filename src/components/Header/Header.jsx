import logo from "../../images/logo.png";

function Header() {
  return (
    <header className="header">
      {<img src={logo} alt="Logotipo" className="header__logo" />}
    </header>
  );
}

export default Header;
