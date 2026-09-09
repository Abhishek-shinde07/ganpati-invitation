import './globals.css';

export const metadata = {
  title: 'Ganpati Invitation | शिंदे परिवार',
  description: 'आपणास सस्नेह निमंत्रण !',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Fallback Tailwind CDN to guarantee styling renders immediately */}
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-[#FDF8EE] margin-0 padding-0 antialiased">
        {children}
      </body>
    </html>
  );
}
