// app/layout.js
import '../styles/globals.css';

export const metadata = {
  title: 'Senior Sense – Coming Soon',
  description: 'AI-powered healthcare and finance platform for seniors.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="site-wrapper">{children}</div>
      </body>
    </html>
  );
}

