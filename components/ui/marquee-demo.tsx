import { Marquee } from "@/components/ui/marquee"
import Image from "next/image";

const Logos = {
  ellington: () => (
    <Image src="/companies/Ellington.png" alt="Ellington" fill className="h-full object-contain" />
  ),
  prada: () => (
    <Image src="/companies/prada.png" alt="Prada" fill className="h-full object-contain" />
  ),
  jaguar: () => (
    <Image src="/companies/jaguar.svg" alt="Jaguar" fill className="h-full object-contain" />
  ),
  rylaai: () => (
    <Image src="/companies/rylaai.svg" alt="Rylaai" fill className="h-full object-contain" />
  ),
  sobha: () => (
    <Image src="/companies/sobha.svg" alt="Sobha" fill className="h-full object-contain" />
  ),
  solu: () => (
    <Image src="/companies/solu.png" alt="Solu" fill className="h-full object-contain" />
  ),
  talabat: () => (
    <Image src="/companies/talabat.svg" alt="Talabat" fill className="h-full object-contain" />
  ),
  boki: () => (
    <Image src="/companies/boki.svg" alt="Boki" fill className="h-full object-contain" />
  ),
  daughterDad: () => (
    <Image src="/companies/daughter-dad-coffee.svg" alt="Daughter & Dad Coffee" fill className="h-full object-contain" />
  ),
  sagra: () => (
    <Image src="/companies/sagra.svg" alt="Sagra Italian Pastificio" fill className="h-full object-contain" />
  ),
};


export function MarqueeDemo() {
  const arr = [
    Logos.ellington,
    Logos.prada,
    Logos.jaguar,
    Logos.rylaai,
    Logos.sobha,
    Logos.solu,
    Logos.talabat,
    Logos.boki,
    Logos.daughterDad,
    Logos.sagra,
  ];

  return (
    <Marquee pauseOnHover speed={20}>
      {arr.map((Logo, index) => (
        <div
          key={index}
          className="relative flex items-center justify-center min-w-[70px] md:min-w-[200px] h-5 md:h-16 mx-3 md:mx-8"
        >
          <Logo />
        </div>
      ))}
    </Marquee>
  )
}