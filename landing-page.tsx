import Image from "next/image"
import Link from "next/link"
import { Pacifico, Comic_Neue as Comic_Sans_MS, Merriweather } from "next/font/google"

import VisitorCounter from "./components/visitor-counter"

const pacifico = Pacifico({ weight: "400", subsets: ["latin"] })
const comicSans = Comic_Sans_MS({ weight: "400", subsets: ["latin"] })
const merriweather = Merriweather({ weight: "400", subsets: ["latin"] })

const blinkingText = {
  animation: "blink 1s step-end infinite",
  "@keyframes blink": {
    "0%, 50%": { opacity: 1 },
    "50.01%, 100%": { opacity: 0 },
  },
}

export default function Ugly90sLLMLanding() {
  return (
    <div
      style={{
        backgroundColor: "#FFFF00",
        color: "#FF00FF",
        fontFamily: merriweather.style.fontFamily,
        padding: "10px",
        border: "5px solid #00FF00",
      }}
    >
      <marquee style={{ backgroundColor: "#FF0000", color: "#00FFFF" }}>
        Welcome to SuperMegaUltra LLM AI - The BEST AI on the ENTIRE World Wide Web!!!
      </marquee>

      <h1
        className={pacifico.className}
        style={{
          textAlign: "center",
          fontSize: "48px",
          textShadow: "2px 2px #FF0000, 4px 4px #00FF00, 6px 6px #0000FF",
        }}
      >
        SuperMegaUltra LLM AI
      </h1>

      <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
        <div style={{ width: "60%", backgroundColor: "#FF69B4", padding: "10px", border: "3px dashed #000000" }}>
          <h2 className={pacifico.className} style={blinkingText}>
            What is SuperMegaUltra LLM AI?
          </h2>
          <p style={{ fontSize: "14px", lineHeight: "1.2" }}>
            SuperMegaUltra LLM AI is the MOST ADVANCED artificial intelligence on the PLANET! Our Large Language Model
            can do ANYTHING you can imagine! Write essays, code programs, solve world hunger, and even tell you what
            you'll have for breakfast tomorrow! (Results may vary. SuperMegaUltra LLM AI is not responsible for any
            existential crises or robot uprisings.)
          </p>
          <ul className={comicSans.className} style={{ listStyleType: "square" }}>
            <li>BLAZING FAST responses (may take up to 24 hours)</li>
            <li>UNLIMITED* usage (*limit of 3 queries per day)</li>
            <li>99.9%** accuracy (**on a good day, when Mercury is not in retrograde)</li>
          </ul>
        </div>

        <div style={{ width: "35%", backgroundColor: "#00FFFF", padding: "10px", border: "3px ridge #FF0000" }}>
          <h3 className={pacifico.className} style={{ color: "#FF0000", textDecoration: "underline overline" }}>
            HOT LINKS!!!
          </h3>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Link href="https://linktr.ee/bryan.ees" target="_blank" style={{ color: "#0000FF", textDecoration: "none", marginBottom: "5px" }}>
              Click here to BLOW YOUR MIND!
            </Link>
            <Link href="https://linktr.ee/bryan.ees" target="_blank" style={{ color: "#0000FF", textDecoration: "none", marginBottom: "5px" }}>
              Top 10 things our AI can do (Number 7 will SHOCK you!)
            </Link>
            <Link href="https://linktr.ee/bryan.ees" target="_blank" style={{ color: "#0000FF", textDecoration: "none", marginBottom: "5px" }}>
              Is our AI sentient? (Spoiler: Maybe???)
            </Link>
            <Link href="https://linktr.ee/bryan.ees" target="_blank" style={{ color: "#0000FF", textDecoration: "none", marginBottom: "5px" }}>
              Why our competitors are LITERAL GARBAGE
            </Link>
          </div>
        </div>
      </div>

      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <Image
          src="/ai-thinking.jpeg?height=200&width=300"
          alt="Mind-blowing AI visualization"
          width={300}
          height={200}
          style={{ border: "10px groove #FF00FF" }}
        />
        <p className={comicSans.className} style={{ fontSize: "10px", color: "#000000" }}>
          Actual footage of our AI thinking (not clickbait)
        </p>
      </div>

      <div
        style={{
          backgroundColor: "#FF7F50",
          padding: "15px",
          border: "5px outset #FFD700",
          textAlign: "center",
          margin: "20px 0",
        }}
      >
        <h2 className={pacifico.className} style={{ color: "#0000FF", textShadow: "1px 1px #FFFFFF" }}>
          SIGN UP NOW AND GET 1 MILLION* TOKENS FREE!!!
        </h2>
        <p className={comicSans.className} style={{ fontSize: "12px" }}>
          *1 million tokens is equivalent to approximately 3.5 queries. Offer valid until the Y2K bug destroys all
          computers.
        </p>
        <button
          style={{
            backgroundColor: "#00FF00",
            color: "#FF0000",
            fontSize: "24px",
            padding: "10px 20px",
            border: "5px outset #00FF00",
            cursor: "pointer",
            animation: "pulse 0.5s infinite alternate",
          }}
        >
          <a href="https://www.eesolutions.io/" target="_blank">CLICK HERE TO SIGN UP!!!</a>
        </button>
      </div>

      <footer
        style={{
          backgroundColor: "#000000",
          color: "#FFFFFF",
          textAlign: "center",
          padding: "10px",
          fontSize: "12px",
        }}
      >
        <p>© 1999 SuperMegaUltra LLM AI - All your base are belong to us</p>
        <p>Best viewed in Netscape Navigator at 640x480 resolution</p>
        <div>
          <Image src="/ai-icon.jpeg?height=31&width=88" alt="Best viewed with Netscape" width={88} height={31} />
        </div>
        <p>
          You are visitor number:
          <span
            style={{
              backgroundColor: "#FFFFFF",
              color: "#000000",
              padding: "2px 5px",
              border: "1px inset #CCCCCC",
            }}
          >
            <VisitorCounter />
          </span>
        </p>
      </footer>

      <style jsx global>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          50.01%, 100% { opacity: 0; }
        }
        @keyframes pulse {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
      `}</style>
    </div>
  )
}

