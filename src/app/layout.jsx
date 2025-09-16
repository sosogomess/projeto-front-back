import "./globals.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export const metadata = {
    title: "Hair Tone - Descubra o tom perfeito para seu cabelo",
    description: "Explore uma variedade de tonalidades de tinta para cabelo e encontre a cor ideal para você. Salve suas cores favoritas e descubra dicas de cuidados.",
    icons: {
        icon: "/image/Logooficial.png",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
