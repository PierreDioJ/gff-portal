import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { Calendar, Clock, Timer } from "lucide-react";
import Link from "next/link";
import { AspectRatio } from "../ui/aspect-ratio";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export const news = [
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
    {
        id: 5,
        type: "событие",
        date: "08.01.2024",
        time: "12:15",
        title: "Подписано соглашение о международном сотрудничестве",
        description:
            "Госфильмофонд России подписал соглашение с архивами стран СНГ...",
        link: "#",
    },
    {
        id: 6,
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
        <section className="m-auto py-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {news.map((item) => (
                    <Card key={item.id} className="flex flex-col h-full bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden h-125">
                        <CardHeader>
                            <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
                            </AspectRatio>
                        </CardHeader>
                        <CardContent className="w-full flex flex-col gap-4">
                            <div className="flex justify-between">
                                <Badge style={{
                                        backgroundColor: typeStyles[item.type]?.bg,
                                        color: typeStyles[item.type]?.color,
                                    }}>{item.type}</Badge>
                                <ul className="flex flex-wrap gap-4">
                                    <li className="flex flex-row gap-1 items-center">
                                        <Calendar size={16} />
                                        <span className="text-sm">{item.date}</span>
                                    </li>
                                    <li className="flex flex-row gap-1 items-center">
                                        <Clock size={16} />
                                        <span className="text-sm">{item.time}</span>
                                    </li>
                                </ul>
                            </div>
                            <CardTitle>{item.title}</CardTitle>
                            <CardDescription className="overflow-hidden text-clip">{item.description}</CardDescription>
                        </CardContent>
                        <CardFooter>
                            <Link className="w-full cursor-pointer justify-start px-0" href={`/news/${item.id}`}>
                                Читать далее &rarr;
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
}
