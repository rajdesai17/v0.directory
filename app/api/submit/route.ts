import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { title, description, prompt, category, customCategory, v0Link, author } = await req.json()

    // Validate required fields
    if (!title || !description || !prompt || !category) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
    }

    const finalCategory = category === "other" ? customCategory : category

    const issueBody = `## Prompt Title
${title}

## Description
${description}

## Category
${finalCategory}

## Full Prompt
\`\`\`
${prompt}
\`\`\`

## v0 Link
${v0Link || "Not provided"}

## Submitted by
${author || "Anonymous"}

---
*Submitted via v0.directory*`

    const res = await fetch("https://api.github.com/repos/rajdesai17/v0.directory/issues", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: `[Prompt Submission] ${title}`,
        body: issueBody,
        labels: ["prompt-submission", finalCategory.toLowerCase().replace(/\s+/g, "-")],
      }),
    })

    if (!res.ok) {
      const error = await res.json()
      console.error("GitHub API error:", error)
      return NextResponse.json({ success: false, error: error.message || "Failed to create issue" }, { status: 500 })
    }

    const data = await res.json()
    return NextResponse.json({ success: true, issueUrl: data.html_url })
  } catch (error) {
    console.error("Submit error:", error)
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}
