'use client'

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "./style.css";

export default function Header() {
    const pathname = usePathname();
    return (
        <header className="header">
            <div className="container">
                <nav className="header-nav-split">
                    <div className="header-left">
                        <Link href="/" className="header-logo">
                            <Image
                                src="/logo.svg"
                                alt="GFF Portal Logo"
                                width={100}
                                height={70} />
                            <div className="header-title-group">
                                <div className="header-title">Госфильмофонд России</div>
                                <div className="header-subtitle">Государственный фонд кинофильмов Российской Федерации</div>
                            </div>
                        </Link>
                    </div>
                    <div className="header-center">
                        <ul className="header-menu">
                            <li className="menu-item">
                                <Link href="/" className={`menu-link${pathname === '/' ? ' active' : ''}`}>Главная</Link>
                            </li>
                            <li className="menu-item">
                                <Link href="/documents" className={`menu-link${pathname.startsWith('/documents') ? ' active' : ''}`}>Документы</Link>
                            </li>
                            <li className="menu-item">
                                <Link href="#" className="menu-link">Архив</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="header-right">
                        <div className="header-search">
                            <span className="search-icon">
                                <Image
                                    src="/search.svg"
                                    alt="search"
                                    width={20}
                                    height={20}
                                />
                            </span>
                            <input type="text" className="search-input" placeholder="Поиск..." />
                        </div>
                        <div className="header-user">
                            <span className="user-icon">
                                <Image
                                    src="/user.svg"
                                    alt="user"
                                    width={24}
                                    height={24} />
                            </span>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}