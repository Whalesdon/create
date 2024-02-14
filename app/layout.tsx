import "./globals.css";




// export const metadata = {
//   title: "REVOLUT 2 EARN",
//   description: "revolt.com",
//   icons: {
//     icon: [
//       {
//         media: "(prefers-color-scheme: light)",
//         url: "/favicon.png",
//         href: "/favicon.png",
//       },
//       {
//         media: "(prefers-color-scheme: dark)",
//         url: "/favicon.png",
//         href: "/favicon.png",
//       }
//     ]
//   }
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="" >{children}</body>
    </html>
  );
}
