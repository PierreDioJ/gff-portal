
import Image from "next/image";
import "./style.css";

const documents = [
  {
    id: 1,
    title: "Приказ № 45-П от 15.01.2024",
    type: "приказ",
    description: "О порядке приема кинематографических материалов в архив Госфильмофонда России",
    date: "15.01.2024",
    format: "PDF",
    size: "1.2 МБ",
    link: "#"
  },
  {
    id: 2,
    title: "Положение о цифровой реставрации",
    type: "положение",
    description: "Методические рекомендации по цифровой реставрации кинофильмов",
    date: "10.01.2024",
    format: "PDF",
    size: "890 КБ",
    link: "#"
  },
  {
    id: 3,
    title: "Годовой отчет за 2023 год",
    type: "отчет",
    description: "Отчет о деятельности Госфильмофонда России за 2023 год",
    date: "05.01.2024",
    format: "PDF",
    size: "3.5 МБ",
    link: "#"
  },
  {
    id: 4,
    title: "Регламент доступа к архивным материалам",
    type: "регламент",
    description: "Правила и условия предоставления доступа к архивным кинематографическим материалам",
    date: "20.12.2023",
    format: "PDF",
    size: "1.8 МБ",
    link: "#"
  },
  {
    id: 5,
    title: "Приказ № 42-П от 18.12.2023",
    type: "приказ",
    description: "О внесении изменений в структуру управления фондом",
    date: "18.12.2023",
    format: "PDF",
    size: "675 КБ",
    link: "#"
  }
];


type TypeStyle = { bg: string; color: string };
const typeStyles: Record<string, TypeStyle> = {
  "приказ":    { bg: "#FEE2E2", color: "#991B1B" },
  "положение": { bg: "#DBEAFE", color: "#1F2E62" },
  "отчет":     { bg: "#DCFCE7", color: "#166534" },
  "регламент": { bg: "#F3E8FF", color: "#6B21A8" }
};

export default function DocumentsList() {
  return (
    <div className="documents-list">
      {documents.map(doc => (
        <div className="documents-item" key={doc.id}>
          <div className="documents-info">
            <div className="documents-title-row">
              <span className="documents-title">{doc.title}</span>
              <span
                className="documents-badge"
                style={{
                  backgroundColor: typeStyles[doc.type as keyof typeof typeStyles].bg,
                  color: typeStyles[doc.type as keyof typeof typeStyles].color
                }}
              >
                {doc.type}
              </span>
            </div>
            <div className="documents-desc">{doc.description}</div>
            <div className="documents-meta">
              <span>{doc.date}</span>
              <span>•</span>
              <span>{doc.format}</span>
              <span>•</span>
              <span>{doc.size}</span>
            </div>
          </div>
          <a href={doc.link} className="documents-download" download>
            <Image src="/dwnld.svg" alt="Скачать" width={20} height={20} />
            <span>Скачать</span>
          </a>
        </div>
      ))}
    </div>
  );
}
