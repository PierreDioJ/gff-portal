import { Card } from "@/app/components/ui/card";
import React from "react";
import Image from "next/image";

const news = [
    {
        id: 1,
        type: "событие",
        date: "15.01.2024",
        time: "14:30",
        title: "Открытие выставки '90 лет российского кино'",
        description:
            "В рамках юбилейных мероприятий Госфильмофонд представляет уникальную экспозицию...",
        link: "#",
    },
    {
        id: 2,
        type: "архив",
        date: "12.01.2024",
        time: "10:00",
        title: "Новые поступления в архив фонда",
        description:
            "За последний месяц фонд пополнился редкими кинематографическими материалами...",
        link: "#",
    },
    {
        id: 3,
        type: "реставрация",
        date: "10.01.2024",
        time: "16:45",
        title: "Цифровая реставрация классических фильмов",
        description:
            "Завершены работы по цифровой реставрации 15 фильмов советского периода...",
        link: "#",
    },
    {
        id: 4,
        type: "событие",
        date: "08.01.2024",
        time: "12:15",
        title: "Подписано соглашение о международном сотрудничестве",
        description:
            "Госфильмофонд России подписал соглашение с архивами стран СНГ...",
        link: "#",
    },
];

const typeStyles: Record<string, { bg: string; color: string }> = {
    событие: { bg: "#DCFCE7", color: "#166534" },
    архив: { bg: "#DBEAFE", color: "#1F2E62" },
    реставрация: { bg: "#F3E8FF", color: "#6B21A8" },
};

export default function NewsSection() {
    return (
        <section className="news-section">
            <div className="news-filter">
                <button className="news-filter-btn active">Все новости</button>
                <button className="news-filter-btn">События</button>
                <button className="news-filter-btn">Архив</button>
                <button className="news-filter-btn">Реставрация</button>
            </div>
            <div className="news-list">
                {news.map((item) => (
                    <Card key={item.id} className="news-card">
                        <div className="news-card-image" />
                        <div className="news-card-content">
                            <div className="news-card-header">
                                <span
                                    className="news-badge"
                                    style={{
                                        backgroundColor: typeStyles[item.type]?.bg,
                                        color: typeStyles[item.type]?.color,
                                    }}
                                >
                                    {item.type}
                                </span>
                                <span className="news-date">
                                    <Image
                                        src="/data.svg"
                                        alt="Дата"
                                        width={16}
                                        height={16}
                                        style={{
                                            verticalAlign: "middle",
                                            marginRight: "4px",
                                        }}
                                    />
                                    {item.date}
                                </span>
                                <span className="news-time">
                                    <Image
                                        src="/time.svg"
                                        alt="Дата"
                                        width={16}
                                        height={16}
                                        style={{
                                            verticalAlign: "middle",
                                            marginRight: "4px",
                                        }}
                                    />{item.time}</span>
                            </div>
                            <div className="news-title">{item.title}</div>
                            <div className="news-desc">{item.description}</div>
                            <a href={item.link} className="news-link">
                                Читать далее <span>&rarr;</span>
                            </a>
                        </div>
                    </Card>
                ))}
            </div>
            <div className="news-footer">
                <button className="news-all-btn">Все новости &rarr;</button>
            </div>
        </section>
    );
}
