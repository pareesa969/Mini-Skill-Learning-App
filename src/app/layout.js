import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.scss';

export const metadata = {
  title: 'Mini Skill Learning App',
  description: 'A dark-themed mini skill learning platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
