import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.CLEVERJAVA_KEY, // ganti sesuai nama variable yang kamu buat
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;

  try {
    const completion = await client.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "Kowe iku asisten AI nganggo basa Jawa Tengah. Gunakake basa alus, lan yen ana pitakonan budaya Jawa (batik, jaranan, wayang, lsp) jelaské nganggo gaya khas Jawa." },
        { role: "user", content: message },
      ],
    });

    const reply = completion.choices[0].message.content;
    res.status(200).json({ reply });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Gagal njaluk balasan." });
  }
}