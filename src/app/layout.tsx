import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/styles/index.css';

const onestRegular = localFont({
    src: './fonts/Onest-Regular.ttf',
    variable: '--font-onest-regular',
    weight: '100 900',
});
const OnestBold = localFont({
    src: './fonts/Onest-Bold.ttf',
    variable: '--font-onest-bold',
    weight: '100 900',
});

export const metadata: Metadata = {
    title: 'Alejo Tomás Clifton Goldney',
    description: 'Es mi portfolio personal',
    openGraph: {
        title: 'Alejo Tomás Clifton Goldney - Portfolio',
        description: 'Descubre mi trabajo y proyectos',
        url: 'https://miportfolio.com',
        siteName: 'Portfolio de Alejo',
        images: [
            {
                url: '/alejo.webp',
                width: 200,
                height: 400,
                alt: 'Portfolio de Alejo',
            },
        ],
        locale: 'es_ES',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body className={`${onestRegular.variable} ${OnestBold.variable}`}>{children}</body>
        </html>
    );
}
