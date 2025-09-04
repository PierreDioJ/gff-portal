import './style.page.css';
import HeroStats from "./components/HeroStats/HeroStats";

export default function Home() {
  return (
    <main className="main">
      <section className="hero-section">
        <div className="hero-bg">
          <div className="hero-content">
            <h1 className="hero-title">Госфильмофонд России</h1>
            <p className="hero-subtitle">Сохранение, изучение и популяризация отечественного кинонаследия</p>
            <div className="hero-buttons">
              <a href="#" className="hero-btn">Архив фильмов <span>&rarr;</span></a>
              <a href="#" className="hero-btn">О фонде</a>
            </div>
            <HeroStats />
          </div>
        </div>
      </section>
      <section className="news-events">
        <div className="fcl-documents-top">
          <h1 className="sct-title">Новости и события</h1>
          <p className="sct-subtitle">Актуальная информация о деятельности Госфильмофонда России</p>
        </div>
      </section>
    </main>
  );
}
