import Link from "next/link";
import Image from "next/image";

import "./ChooseYourSide.scss"


export default async function ChooseYourSide() {
  
  return (
    <main className="chooseYourSide">
      <section className="chooseYourSide__inner">
        <article className="chooseYourSide__inner--light">
          <Link href="/light-side">
            <h2>Light Side</h2>
          </Link>
          <div className="chooseYourSide__inner--light--absolute">
            <Image
            src="/JediLogo.png"
            alt="Jedi Logo"
            width={150}
            height={150}
          />
          </div>
        </article>
        <article className="chooseYourSide__inner--absolute">
          <h1>Choose Y</h1>
          <h1 className="chooseYourSide__inner--absolute--right">our Side</h1>
        </article>
        <article className="chooseYourSide__inner--dark">
          <Link href="/dark-side">
            <h2>Dark Side</h2>
          </Link>
          <div className="chooseYourSide__inner--light--absolute">
            <Image
              src="/Sith-Emblem.png"
              alt="Sith Logo"
              width={300}
              height={150}
            />
            </div>
        </article>
      </section>
    </main>
  );
}