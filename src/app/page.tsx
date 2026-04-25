import { redirect } from "next/navigation";

export default function Home() {
  redirect("/en");
}

// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   // nie ruszaj jeśli już ma język
//   if (pathname.startsWith("/pl") || pathname.startsWith("/en")) {
//     return NextResponse.next();
//   }

//   // cookie preferencji
//   const langCookie = request.cookies.get("lang")?.value;

//   if (langCookie === "en") {
//     return NextResponse.redirect(new URL("/en", request.url));
//   }

//   if (langCookie === "pl") {
//     return NextResponse.redirect(new URL("/pl", request.url));
//   }

//   // fallback: język przeglądarki
//   const acceptLang = request.headers.get("accept-language");

//   if (acceptLang?.startsWith("en")) {
//     return NextResponse.redirect(new URL("/en", request.url));
//   }

//   // default
//   return NextResponse.redirect(new URL("/pl", request.url));
// }

// document.cookie = "lang=en; path=/; max-age=31536000";