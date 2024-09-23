import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";
import Logo from "../app/assets/logo.svg";
import LandingImage from "../app/assets/main.svg";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <header className="max-w-6xl mx-auto px-4 sm:px-8 py-6">
        <Image src={Logo} alt="'logo" width={100} height={100} />
      </header>
      <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,400px] items-center">
        <div>
          <h1 className="capitalize text-4xl md:text-7xl font-bold">
            job<span className="text-primary">tracking</span>app
          </h1>
          <p className="lading-loose max-w-md mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
            magni itaque cumque porro nisi, inventore quas quos a unde illum.
          </p>
          <Button asChild className="mt-4">
            <Link href="/add-job">Get Started</Link>
          </Button>
        </div>
        <Image
          src={LandingImage}
          alt="landing image"
          width={300}
          height={300}
          className="hidden lg:block"
        />
      </section>
    </main>
  );
}
