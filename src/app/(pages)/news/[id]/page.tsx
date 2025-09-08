import { news } from '@/components/ArchiveList/page';
import { Calendar, Timer } from 'lucide-react';

type NewsPageProps = { params: { id: string } };

export default function NewsPage({ params: { id } }: NewsPageProps) {
    const item = news.find(n => String(n.id) === id);
    if (!item) return <div className="text-center py-20 text-gray-500">Новость не найдена</div>;
    return (
        <div className="max-w-2xl mx-auto py-10 px-4">
            <div className="mb-4 flex items-center gap-2">
                <span className="text-xs font-medium rounded-md px-3 py-1 lowercase inline-block" style={{backgroundColor: item.type === 'событие' ? '#DCFCE7' : item.type === 'архив' ? '#DBEAFE' : '#F3E8FF', color: item.type === 'событие' ? '#166534' : item.type === 'архив' ? '#1F2E62' : '#6B21A8'}}>{item.type}</span>
                <span className="flex items-center gap-1 text-gray-400 text-xs"><Calendar size={16} />{item.date}</span>
                <span className="flex items-center gap-1 text-gray-400 text-xs"><Timer size={16} />{item.time}</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h1>
            <div className="text-base text-gray-700 mb-6">{item.description}</div>
            <div className="h-48 bg-gray-100 rounded-xl mb-6" />
            <div className="text-sm text-gray-500">Здесь может быть подробный текст новости или дополнительная информация.</div>
        </div>
    );
}