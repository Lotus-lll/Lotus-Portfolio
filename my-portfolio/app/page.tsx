import { Nr1Section } from "@/components/home/nr1-section";
import { Nr2Section } from "@/components/home/nr2-section";
import { Nr3Section } from "@/components/home/nr3-section";
import { Nr4Section } from "@/components/home/nr4-section";
import { Nr5Section } from "@/components/home/nr5-section";
import { EditorialFooter, EditorialHeader } from "@/components/layout/editorial-chrome";

export default function Home() {
  return (
    <>
      <EditorialHeader />
      <main className="overflow-x-hidden bg-[#f4f4f2] text-neutral-950">
        <Nr1Section />
        <Nr2Section />
        <Nr3Section />
        <Nr4Section />
        <Nr5Section />
        <EditorialFooter />
      </main>
    </>
  );
}
