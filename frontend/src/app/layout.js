import "./globals.css";

export const metadata = {
  title: "Phisherman - AI-Powered Security Training",
  description:
    "Protecting your organization from phishing attacks with AI-powered security training.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
