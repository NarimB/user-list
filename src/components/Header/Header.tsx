import { Link } from "react-router";
import logo from "../../assets/users-logo.svg";
import "./Header.scss";

export function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="user logo" />
      </Link>
      <h1 className="header__title">Users List</h1>
    </header>
  );
}
