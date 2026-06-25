import Navbar from "@/components/layout/Navbar";

import Footer from "@/components/layout/Footer";

import { AuthProvider } from "@/context/AuthContext";

import type { Viewport } from "next";

import "./globals.css";









// MOBILE VIEWPORT SETTINGS

export const viewport: Viewport = {

    width: "device-width",

    initialScale: 1,

    maximumScale: 1,

};









export default function RootLayout({

    children,

}: {

    children: React.ReactNode

}) {





    return (





        <html lang="en">





            <body>





                <AuthProvider>





                    <div

                        className="min-h-screen flex flex-col"

                    >





                        <Navbar />










                        <main

                            className="flex-1"

                        >





                            {children}





                        </main>










                        <Footer />










                    </div>





                </AuthProvider>





            </body>





        </html>





    );





}