import Link from "next/link";

const Footer = () => {

    const date = new Date().getFullYear();

  return (
    <footer className="bg-priColor px-3 py-6">
        <p className="text-[white] text-[13px] text-center">© {date} <span className="font-bold">Go Food</span>, Inc. All rights reserved <br/> Made by <Link href="https://www.muteenk.dev/" className="underline font-semibold text-[#00c3ff]"> Muteen Nabi Kundangar </Link></p>
    </footer>
  )
}

export default Footer