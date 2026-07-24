import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Railway Test Hello',
  description: 'Railway auto-deploy end-to-end test',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
