import { streamText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function POST() {
  try {
    const prompt = `
Create a list of three open-ended and engaging questions formatted as a single string.
Each question should be separated by '||'.

Rules:
- Suitable for anonymous social messaging (like Qooh.me)
- Avoid personal or sensitive topics
- Focus on universal, friendly themes
- Output ONLY the questions string
- ONLY return the questions string. No explanations.

Example format:
Question 1||Question 2||Question 3
`

    const result = await streamText({
      model: openai("gpt-4o-mini"),
      prompt,
    })

    return result.toTextStreamResponse()
  } catch (error) {
    console.error("Error generating suggested messages:", error)

    return new Response(
      JSON.stringify({ success: false, message: "Internal server error" }),
      { status: 500 }
    )
  }
}
