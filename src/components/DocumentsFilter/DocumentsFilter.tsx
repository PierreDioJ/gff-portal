import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { Search } from "lucide-react";
export default function DocumentsFilter() {
	return (
		<section className="documents-filter">
			<div className="flex justify-between">
				<div className="documents-search position: relative flex align-middle rounded-xl border-solid border-2">
					<span className="documents-search-icon">
						<Search className="text-gray-400" size={20} />
					</span>
					<input
						type="text"
						className="documents-search-input"
						placeholder="Поиск документов..."
					/>
				</div>
				<div className="dcm-flt_btns">
					<div className="flt-btns-desktop gap-4">
						<button className="documents-filter__button documents-filter__button--active">Все документы</button>
						<button className="documents-filter__button">Приказы</button>
						<button className="documents-filter__button">Положения</button>
						<button className="documents-filter__button">Регламенты</button>
					</div>
					<div className="flt-btns-mobile">
						<Popover>
							<PopoverTrigger className="documents-filter__button">Фильтры</PopoverTrigger>
							<PopoverContent className="flt-popover-content">
								<button className="documents-filter__button documents-filter__button--active">Все документы</button>
								<button className="documents-filter__button">Приказы</button>
								<button className="documents-filter__button">Положения</button>
								<button className="documents-filter__button">Регламенты</button>
							</PopoverContent>
						</Popover>
					</div>
				</div>
			</div>
		</section>
	);
}
