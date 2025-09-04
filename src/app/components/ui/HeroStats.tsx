import Image from "next/image";
import React from "react";

export default function HeroStats() {
  return (
    <div className="hero-stats">
      <div className="hero-stat">
        <div className="hero-stat-icon">
          <Image src="/archive.svg" alt="Архив" width={40} height={40} />
        </div>
        <div className="hero-stat-value">75,000+</div>
        <div className="hero-stat-label">Фильмов в архиве</div>
      </div>
      <div className="hero-stat">
        <div className="hero-stat-icon">
          <Image src="/calendar.svg" alt="Лет работы" width={40} height={40} />
        </div>
        <div className="hero-stat-value">90+</div>
        <div className="hero-stat-label">Лет работы</div>
      </div>
      <div className="hero-stat">
        <div className="hero-stat-icon">
          <Image src="/user-group.svg" alt="Специалистов" width={40} height={40} />
        </div>
        <div className="hero-stat-value">300+</div>
        <div className="hero-stat-label">Специалистов</div>
      </div>
    </div>
  );
}
