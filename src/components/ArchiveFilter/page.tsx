import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { Search } from "lucide-react";
export default function ArchiveFilter() {
       return (
	       <section className="my-8">
		       <div className="flex flex-col md:flex-row justify-between gap-4">
			       <div className="relative flex items-center rounded-xl border-2 border-gray-200 w-full md:w-[700px] max-w-full h-[51px] px-2 pl-8">
				       <span className="absolute left-2 flex items-center text-gray-400">
					       <Search className="text-gray-400" size={20}/>
				       </span>
				       <input
					       type="text"
					       className="bg-transparent border-none outline-none w-full h-[34px] pl-2 text-sm font-sans"
					       placeholder="Поиск документов..."
				       />
			       </div>
			       <div className="flex gap-2 items-center">
				       <div className="hidden md:flex gap-4">
					       <button className="bg-[#35425E] border-none rounded-sm px-[18px] py-4 text-sm text-gray-100 cursor-pointer transition-colors font-sans focus:outline-none active:bg-gray-800">Все новости</button>
					       <button className="bg-gray-100 border-none rounded-sm px-[18px] py-4 text-sm text-gray-700 cursor-pointer transition-colors font-sans focus:outline-none active:bg-gray-200">События</button>
					       <button className="bg-gray-100 border-none rounded-sm px-[18px] py-4 text-sm text-gray-700 cursor-pointer transition-colors font-sans focus:outline-none active:bg-gray-200">Архив</button>
					       <button className="bg-gray-100 border-none rounded-sm px-[18px] py-4 text-sm text-gray-700 cursor-pointer transition-colors font-sans focus:outline-none active:bg-gray-200">Реставрация</button>
				       </div>
				       <div className="flex md:hidden">
					       <Popover>
						       <PopoverTrigger className="bg-gray-100 border-none rounded-md px-4 py-3 text-sm text-gray-700 cursor-pointer transition-colors font-sans focus:outline-none active:bg-gray-200">Фильтры</PopoverTrigger>
						       <PopoverContent className="flex flex-col gap-2 p-2 min-w-[120px]">
							       <button className="bg-[#35425E] border-none rounded-md px-4 py-3 text-sm text-gray-100 cursor-pointer transition-colors font-sans focus:outline-none active:bg-gray-800">Все новости</button>
							       <button className="bg-gray-100 border-none rounded-md px-4 py-3 text-sm text-gray-700 cursor-pointer transition-colors font-sans focus:outline-none active:bg-gray-200">События</button>
							       <button className="bg-gray-100 border-none rounded-md px-4 py-3 text-sm text-gray-700 cursor-pointer transition-colors font-sans focus:outline-none active:bg-gray-200">Архив</button>
							       <button className="bg-gray-100 border-none rounded-md px-4 py-3 text-sm text-gray-700 cursor-pointer transition-colors font-sans focus:outline-none active:bg-gray-200">Реставрация</button>
						       </PopoverContent>
					       </Popover>
				       </div>
			       </div>
		       </div>
	       </section>
       );
}
