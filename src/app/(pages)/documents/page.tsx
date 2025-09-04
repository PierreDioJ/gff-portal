import DocumentsFilter from '../../components/DocumentsFilter/DocumentsFilter';
import '../../components/DocumentsFilter/style.css';
import DocumentsList from '../../components/DocumentsList/DocumentsList';
import '../../style.page.css';

export default function DocumentsPage() {
  return (
    <main className="main">
      <div className="container">
        <section className="official-documents">
          <div className="fcl-documents-top">
            <h1 className="sct-title">Официальные документы</h1>
            <p className="sct-subtitle">Приказы, положения, отчеты и другие документы Госфильмофонда</p>
          </div>
          <DocumentsFilter />
          <DocumentsList />
        </section>
      </div>
    </main>
  );
}