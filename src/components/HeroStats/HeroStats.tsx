import Image from "next/image";
import React from "react";
import '@/components/HeroStats/hero-section.css';
import { Archive, Calendar, User, Users } from "lucide-react";

export default function HeroStats() {
  return (
    <div className="hero-stats">
      <div className="hero-stat">
        <div className="hero-stat-icon">
					<Archive size={40} />
        </div>
        <div className="hero-stat-value">75,000+</div>
        <div className="hero-stat-label">Фильмов в архиве</div>
      </div>
      <div className="hero-stat">
        <div className="hero-stat-icon">
					<Calendar size={40} />
        </div>
        <div className="hero-stat-value">90+</div>
        <div className="hero-stat-label">Лет работы</div>
      </div>
      <div className="hero-stat">
        <div className="hero-stat-icon">
					<Users size={40} />
        </div>
        <div className="hero-stat-value">300+</div>
        <div className="hero-stat-label">Специалистов</div>
      </div>
    </div>
  );
}
