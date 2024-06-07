import "./ChooseYourSide.scss"


export default async function ChooseYourSide() {
  
  return (
    <main className="chooseYourSide">
      <section className="chooseYourSide__inner">
        <article className="chooseYourSide__inner--light">
          <h2>Light Side</h2>
        </article>
        <article className="chooseYourSide__inner--absolute">
          <h1>Choose Your Side</h1>
        </article>
        <article className="chooseYourSide__inner--dark">
          <h2>Dark Side</h2>
        </article>
      </section>
    </main>
  );
}