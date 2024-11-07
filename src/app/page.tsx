import CoreTracks from "@/component/widgets/CoreTracks";
import Hero from "@/component/widgets/hero"
import Specliazed from "@/component/widgets/Specliazed";
export default function Home() {
  return (
    <>
    <main>
 {/* hero section */}
 <Hero />
 {/* Core Track section */}
<CoreTracks/>
{/* Specialized Tracks */}
<Specliazed/>

    </main>
    </>
  );
}
