import CircleMask from "@/components/CircleMask"
import LShape from "@/components/LShape"
import SocialLink from "@/components/SocialLink"
import SShape from "@/background-shapes/SShape"
import RandomSVGPlacer from "@/components/RandomSVGPlacer"
import ArrowShape from "@/background-shapes/ArrowShape"
import LargeArrowShape from "@/background-shapes/LargeArrowShape"
import EightShape from "@/background-shapes/EightShape"
import PointerShape from "@/background-shapes/PointerShape"
import GlassesShape from "@/background-shapes/GlassesShape"

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#2B2B37] to-[#141A22]">
      <RandomSVGPlacer
        svgItems={[
          { component: SShape, size: 90 },
          { component: SShape, size: 90 },
          { component: ArrowShape, size: 138 },
          { component: ArrowShape, size: 138 },
          { component: LargeArrowShape, size: 291 },
          { component: LargeArrowShape, size: 291 },
          { component: EightShape, size: 299 },
          { component: EightShape, size: 299 },
          { component: PointerShape, size: 89 },
          { component: PointerShape, size: 89 },
          { component: GlassesShape, size: 214 },
          { component: GlassesShape, size: 214 },
        ]}
      />
      <main className="flex-1 flex justify-center items-center">
        <div className="bg-[#151A22] rounded-3xl max-w-[90%] mx-auto w-[460px] relative pt-[122px] px-10 md:px-16 pb-9">
          <img src="/images/profile.jpg" alt="" className="rounded-full w-[122px] h-[122px] bg-white object-contain object-center p-3 -top-[61px] left-1/2 -ml-[61px] absolute" />
          <CircleMask
            size={122}
            borderWidth={3}
            gradientColors={["#511370", "#6297F5"]}
            className="absolute -top-[56px] left-1/2 -ml-[66px]"
          />

          <h1 className="text-white inline">I'm Jeremy Sweazy.</h1>{" "}
          <p className="text-[#598FF6] inline">I am largely self-taught and highly motivated, I have been exploring different areas of web development for over a decade.</p>

          <ul className="flex gap-4 pt-9 justify-center">
            <li>
              <SocialLink title="LinkedIn" href="https://www.linkedin.com/in/jeremysweazy/" icon="linkedin" />
            </li>
            <li>
              <SocialLink title="Email" href="mailto:j@sweazy.link" icon="email" />
            </li>
          </ul>

          <LShape size={44} thickness={22} color="#363A92" className="absolute -bottom-1 -right-1" />
          <LShape size={44} thickness={22} color="#21365F" className="absolute -bottom-2 -right-2" />
        </div>
      </main>
      <footer></footer>
    </div>
  )
}

export default App
