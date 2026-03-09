export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://router.huggingface.co/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.HF_TOKEN}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(req.body)
      }
    )

    const data = await response.json()

    res.status(200).json(data)

  } catch (error) {
    res.status(500).json({
      error: "AI request failed",
      details: error.message
    })
  }
}