import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
    title: "Portfolio",
    description: "My Portfolio of Dang Nhat",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={dmSans.className} suppressHydrationWarning>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
