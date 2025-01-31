import React from 'react';
import { cn } from '@/lib/utils/cn';
import Link from 'next/link';

export default function NavbarTop({ className }: { className?: string }) {
  const links = [
    { name: "Home", href: "/" },
    { name: "Movies", href: "/movies" },
    { name: "TV Shows", href: "/tv-shows" },
    { name: "Animes", href: "/animes" },
    { name: "About", href: "/about" }]
  const nav = [
    { name: "Search", href: "/search" },
    { name: "User", href: "/user" },]

  return (
    <div className={cn("flex flex-row w-full justify-center items-center ", className)}>
      <div className='hidden md:block'>
        <nav className="flex-row flex" >
          <ul className='text-gray-100 flex flex-row space-x-8'>
            {
              links.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>{link.name}
                  </Link>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
      <div className='ml-auto'>
        <nav className="flex-row flex" >
          <ul className='text-gray-100 flex flex-row space-x-2 '>
            {
              nav.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>{link.name}
                  </Link>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
    </div>
  );
}
