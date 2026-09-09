export const metadata = {
  title: 'Ganpati Invitation',
  description: 'You are cordially invited!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
