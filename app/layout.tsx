import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title:'Marushika Kalyan | Portfolio', description:'Portfolio of Marushika Kalyan — Computer Science, software development, data analytics, AI/ML and cloud.' };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
