import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.websnexus.com'),
  title: 'WebsNexus - Build Your Web Presence',
  description: 'Create and manage your professional website with WebsNexus. Easy-to-use platform for building beautiful, responsive websites.',
  keywords: ['website builder', 'web platform', 'online presence', 'website creation'],
  authors: [{ name: 'WebsNexus' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.websnexus.com',
    siteName: 'WebsNexus',
    title: 'WebsNexus - Build Your Web Presence',
    description: 'Create and manage your professional website with WebsNexus',
    images: [
      {
        url: 'https://www.websnexus.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'WebsNexus',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebsNexus - Build Your Web Presence',
    description: 'Create and manage your professional website with WebsNexus',
    images: ['https://www.websnexus.com/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://www.websnexus.com" />
        <link rel="alternate" hrefLang="en" href="https://www.websnexus.com/en" />
        <link rel="alternate" hrefLang="es" href="https://www.websnexus.com/es" />
        <link rel="alternate" hrefLang="fr" href="https://www.websnexus.com/fr" />
        <link rel="alternate" hrefLang="de" href="https://www.websnexus.com/de" />
        <link rel="alternate" hrefLang="x-default" href="https://www.websnexus.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}
