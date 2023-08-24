import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "node_modules/react-modal-video/css/modal-video.css";
import "@/styles/index.css";
import { AppProps } from 'next/app';
import Providers from "./providers";

import {useLocale, NextIntlClientProvider} from 'next-intl';
import {getTranslations} from 'next-intl/server';
import {ReactNode} from 'react';

type Props = {
  children: ReactNode;
};

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'es'}];
}
 
export default async function LocaleLayout({children, params: {locale}}) {
  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
  }

  return (
    <html suppressHydrationWarning lang={locale}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className="dark:bg-black">
      <NextIntlClientProvider locale={locale} messages={messages}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}




