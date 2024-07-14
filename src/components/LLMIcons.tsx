"use client";

import {
  Azure,
  Baichuan,
  ByteDance,
  Claude,
  Dalle, DeepSeek,
  Gemini, Groq,
  Hunyuan,
  Meta, Midjourney, Moonshot,
  OpenAI, OpenRouter,
  Qingyan,
  Spark, Stability,
  Tongyi
} from "@lobehub/icons";


const icons = [
  Dalle,
  Azure,
  Claude,
  Gemini,
  Spark,
  Qingyan,
  Tongyi,
  Baichuan,
  ByteDance,
  Meta,
  Hunyuan,
  Midjourney,
  Stability,
  Moonshot,
  DeepSeek,
  Groq,
  OpenRouter,
];

export default function LLMIcons() {
  return (
  <div className={`grid grid-cols-7 mt-3 gap-2 w-full`}>
    <OpenAI.Avatar size={28} type={`gpt3`}/>
    <OpenAI.Avatar size={28} type={`gpt4`}/>
    {icons.map((Icon, index) => (
      <Icon.Avatar key={index} size={28}/>
    ))}
  </div>
  )
}