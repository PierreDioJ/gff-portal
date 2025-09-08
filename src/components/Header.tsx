"use client"
import Image from "next/image";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Menu, Search } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";


export default function Header() {
	return (
		<header className=" flex mx-auto px-6 h-23 w-full items-center shadow-md">

			<Sheet>
				<Link href="/" className="flex items-center gap-4">
					<Image
						className="hidden sm:flex invert "
						src="/logo.svg"
						alt="GFF logo"
						width={71}
						height={47}
						priority
					/>
					<div>
						<h1 className="text-[19px] leading-[28px]">Госфильмофонд России</h1>
						<p className="text-[13px] leading-[20px] text-slate-500">Государственный фонд кинофильмов Российской Федерации</p>
					</div>
				</Link>

				<div className="grow">
					<div className="hidden xl:flex items-center justify-center gap-2 md:gap-8">
						<Link className="text-slate-500" href="/">Главная</Link>
						<Link className="text-slate-500" href="/documents">Документы</Link>
						<Link className="text-slate-500" href="/archive">Архив</Link>
					</div>
				</div>

				<div className="hidden xl:flex items-center gap-[12px]">
					<Input />
					<Button className="cursor-pointer">
						<Search className="text-slate-500" aria-hidden="true" />
					</Button>
					<Avatar className="rounded-md">
						<AvatarImage src="https://github.com/shadcn.png" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
				</div>
				<div className="flex grow items-center justify-end xl:hidden">
					<SheetTrigger asChild className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400
				hover:bg-gray-100 hover:text-gray-500 focus:outline-none"
					>
						<Button variant="ghost" className="hover:bg-sky-200/50">
							<span className="sr-only">Открыть меню</span>
							<Menu className="text-slate-500" aria-hidden="true" />
						</Button>

					</SheetTrigger>
					<SheetContent>
						<SheetHeader>
							<SheetTitle>
								<div className="mt-8 flex items-center gap-[12px]">
									<Button>
										<Search className="text-slate-500" aria-hidden="true" />
									</Button>
									<Input />
								</div>
							</SheetTitle>
							<nav className="mt-8 flex w-full flex-col gap-6">
								<Link className=" text-slate-500" href="/">Главная</Link>
								<Link className="  text-slate-500" href="/documents">Документы</Link>
								<Link className="text-slate-500" href="/archive">Архив</Link>
							</nav>
						</SheetHeader>
						<SheetFooter>
							<div className="flex flex-col gap-4 w-full">
								<Button variant="default" className="w-full">
									Учетная запись
								</Button>
							</div>
						</SheetFooter>
					</SheetContent>
				</div>
			</Sheet>



		</header>

	)
}