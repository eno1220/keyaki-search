import { Html, Head, Main, NextScript } from "next/document";
import { createGetInitialProps } from "@mantine/next";

const getInitialProps = createGetInitialProps();

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <meta
          name="description"
          content="Google 検索のオプションを簡単に設定できるサイト"
        />
        <meta name="keywords" content="Google,検索,オプション" />
        <meta property="og:title" content="Keyaki Search" />
        <meta
          property="og:description"
          content="Google 検索のオプションを簡単に設定できるサイト"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://keyaki-search.eno1220.dev" />
        <meta
          property="og:image"
          content="https://keyaki-search.eno1220.dev/ogp.png"
        />
        <meta property="og:site_name" content="Keyaki Search" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@1220_eno" />
        <meta name="twitter:creator" content="@1220_eno" />
        <meta name="twitter:title" content="Keyaki Search" />
        <meta
          name="twitter:description"
          content="Google 検索のオプションを簡単に設定できるサイト"
        />
        <meta
          name="twitter:image"
          content="https://keyaki-search.eno1220.dev/ogp.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
