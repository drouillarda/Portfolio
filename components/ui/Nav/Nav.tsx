import Link from 'next/link';
import "./Nav.scss"


export default async function Navbar() {
  
  return (
    <nav className="nav">
        <article>
            <Link href="/light-side">
                <p>Take me to the Light Side</p>
            </Link>
        </article>
        <article className="nav__end">
            <p>My Resume</p>
            <p>My Values</p>
            <p>My Hobbies</p>
            <p>My Projects</p>
        </article>
    </nav>
  );
}