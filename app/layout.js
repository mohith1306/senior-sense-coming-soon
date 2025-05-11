// app/layout.js
import '../styles/globals.css';
import ClientWrapper from './ClientWrapper';

export const metadata = {
  title: 'Senior Sense – Coming Soon',
  description: 'AI-powered healthcare and finance platform for seniors.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
