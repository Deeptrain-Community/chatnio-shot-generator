import { Inter } from "next/font/google";
import {Check} from "lucide-react";
import dynamic from "next/dynamic";


const LLMIcons = dynamic(() => import(`../components/LLMIcons`), { ssr: false });

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <div
        className={`w-screen h-screen select-none flex items-center justify-center md:p-20`}
      >
        <div
          className={`w-full h-full flex flex-row p-4 items-center rounded-lg shadow-lg bg-background border relative`}
          style={{
            borderColor: `hsl(var(--border-hover))`,
          }}
        >
          <div
            className={`w-max h-fit flex flex-col items-center justify-items-center p-8 pl-16`}
          >
            <div className={`relative w-28 h-28`}>
              <img src={`/logo.png`} alt={``}/>
              <div className={`absolute w-full h-full`} style={{
                position: `absolute`,
                top: `50%`,
                left: `50%`,
                borderRadius: `50%`,
                backgroundImage: `linear-gradient( -45deg, rgba(0, 126, 255, .2) 50%, rgba(73, 164, 255, .2) )`,
                filter: `blur(20px)`,
                transform: `translate(-50%, -50%)`,
              }}/>
            </div>
            <h1 className={`relative text-3xl flex flex-row items-center whitespace-nowrap`}>
              Chat Nio
              <p
                className={`text-white rounded-md px-2 ml-2 py-1 text-xs bg-gradient-to-r from-amber-400 to-amber-600`}>
                PRO
              </p>
            </h1>
            <p className={`text-sm mt-2 text-center whitespace-nowrap`}>
              ⚡ Enterprise Grade Solution
            </p>
            <img className={`mt-1 mb-4 w-1/2`} src={`https://skillicons.dev/icons?i=kubernetes,rust,mysql,redis`}
                 alt={``}/>

            <div className={`flex flex-col items-center flex-wrap space-y-1 mt-4 text-sm`}>
              <div className={`flex flex-row items-center text-amber-500 whitespace-nowrap`}>
                <Check className={`w-3.5 h-3.5 mr-1`}/>
                TTS & STT
              </div>
              <div className={`flex flex-row items-center text-amber-500 whitespace-nowrap`}>
                <Check className={`w-3.5 h-3.5 mr-1`}/>
                Plugin System
              </div>
              <div className={`flex flex-row items-center text-amber-500`}>
                <Check className={`w-3.5 h-3.5 mr-1`}/>
                Open GPTs Platform
              </div>
              <div className={`flex flex-row items-center text-amber-500 whitespace-nowrap`}>
                <Check className={`w-3.5 h-3.5 mr-1`}/>
                Multi Payment Providers
              </div>
              <div className={`flex flex-row items-center text-amber-500 whitespace-nowrap`}>
                <Check className={`w-3.5 h-3.5 mr-1`}/>
                Enterprise Channel Manager
              </div>
              <div className={`flex flex-row items-center text-amber-500 whitespace-nowrap`}>
                <Check className={`w-3.5 h-3.5 mr-1`}/>
                Analytics & Insights Dashboard
              </div>
              <div className={`flex flex-row items-center text-amber-500 whitespace-nowrap`}>
                <Check className={`w-3.5 h-3.5 mr-1`}/>
                ...
              </div>
            </div>
          </div>
          <div className={`absolute text-4xl right-4 top-4`}>
            😎
          </div>
          <div className={`h-full flex-grow flex ml-6 p-6 z-10`}>
            <div className={`h-full grid grid-cols-2 gap-2.5`}>
              <img src={`/screenshot/vision.png`} alt={``} className={`border p-0.5 bg-background shadow rounded-md`}/>
              <img src={`/screenshot/editor.png`} alt={``} className={`border p-0.5 bg-background shadow rounded-md`}/>
              <img src={`/screenshot/admin.png`} alt={``} className={`border p-0.5 bg-background shadow rounded-md`}/>
              <img src={`/screenshot/mask-editor.png`} alt={``} className={`border p-0.5 bg-background shadow rounded-md`}/>
            </div>
          </div>
          <div className={`absolute w-64 h-64 right-0 top-0`} style={{
            backgroundImage: `linear-gradient( 45deg, rgba(255, 215, 0, .2) 50%, rgba(255, 205, 0, .3) )`,
            filter: `blur(50px)`,
          }}/>
        </div>
      </div>
    </main>
  );
}
