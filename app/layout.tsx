import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata = {
  title: "Harry Badimba Botema | Full-Stack JavaScript Engineer",
  description: "Building AI-driven products with React, Next.js, Expo & Supabase",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans bg-background-light text-text-light dark:bg-background-dark dark:text-text-dark transition-colors duration-500">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
