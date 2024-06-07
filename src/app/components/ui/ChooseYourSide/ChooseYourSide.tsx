import { Link } from "react-router-dom";
import Image from "next/image";

import "./ChooseYourSide.scss"


export default async function ChooseYourSide() {
  
  return (
    <main className="chooseYourSide">
      <section className="chooseYourSide__inner">
        <article className="chooseYourSide__inner--light">
          <div className="chooseYourSide__inner--light--absolute">
          <Image
            src="/../images/JediLogo.png"
            alt="Jedi Logo"
            width={300}
            height={300}
          />
          </div>
          <h2>Light Side</h2>
        </article>
        <article className="chooseYourSide__inner--absolute">
          <h1>Choose Your Side</h1>
        </article>
        <article className="chooseYourSide__inner--dark">
          <div className="chooseYourSide__inner--light--absolute">
            <Image
              src="/../images/Sith-Emblem.png"
              alt="Sith Logo"
              width={300}
              height={300}
            />
            </div>
          <h2>Dark Side</h2>
        </article>
      </section>
    </main>
  );
}