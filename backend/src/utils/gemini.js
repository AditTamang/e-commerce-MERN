import axios from "axios";

const gemini = async (product) => {
  const data = {
    contents: [
      {
        parts: [
          {
            text: `Give me a short description of the product ${product.productName} with category ${product.category} `,
          },
        ],
      },
    ],
  };

  const result = await axios.post(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
    JSON.stringify(data),
    {
      headers: {
        "X-goog-api-key": process.env.GEMINI_API_KEY,
        "Content-Type": "application/json",
      },
    }
  );

  if (result.data) {
    console.log(result.data);
    return result.data.candidates[0].content.parts[0].text;
  } else {
    throw new Error("Error to create data from Gemini");
  }
};

export default gemini;
