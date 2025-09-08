'use client';
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "../ui/aspect-ratio";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";

const typeStyles: Record<string, { bg: string; color: string }> = {
    событие: { bg: "#DCFCE7", color: "#166534" },
    архив: { bg: "#DBEAFE", color: "#1F2E62" },
    реставрация: { bg: "#F3E8FF", color: "#6B21A8" },
};

export default function NewsSection() {
    const [news, setNews] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchNews() {
            const { data, error } = await supabase.from('news').select('*').order('date', { ascending: false });
            if (!error && data) setNews(data);
            setLoading(false);
        }
        fetchNews();
    }, []);

    return (
        <section className="news-section">
            <div className="news-filter">
                <button className="news-filter-btn active">Все новости</button>
                <button className="news-filter-btn">События</button>
                <button className="news-filter-btn">Архив</button>
                <button className="news-filter-btn">Реставрация</button>
            </div>
            <div className="news-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {loading ? (
                    <div className="text-center py-10 text-gray-400 col-span-full">Загрузка...</div>
                ) : news.length === 0 ? (
                    <div className="text-center py-10 text-gray-400 col-span-full">Нет новостей</div>
                ) : news.slice(0, 3).map((item) => (
                    <Card key={item.id} className="w-full max-w-sm mx-auto">
                        <CardHeader>
                            <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg" />
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
                                        <span className="text-sm">{item.date?.toString().slice(0, 10)}</span>
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
                            <Button asChild variant="link" type="button" className="w-full cursor-pointer justify-start px-0">
                                <Link href={`/news/${item.id}`}>Читать далее &rarr;</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            <div className="news-footer">
                <Link className="news-all-btn" href='/archive'>Все новости &rarr;</Link>
            </div>
        </section>
    );
}
