import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/">Home</Link>

      <Link to="/characters">Characters</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/context">Context</Link>
    </header>
  );
}
