// qrCodeRouter.js
import { Router } from "express";
import QRCode from "qrcode";
import { v4 as uuidv4 } from "uuid";

const qrCodeRoute = Router();

qrCodeRoute.post("/generate", async (req, res) => {
  const { url } = req.body;

  // Check if the URL is provided in the request body
  if (!url) {
    return res.status(400).send({ error: "URL is required in the request body." });
  }

  try {
    // Generate a unique filename for the QR code image
    const filename = `${uuidv4()}.png`;

    // Generate the QR code and save it to a file
    await QRCode.toFile(`./public/qrcodes/${filename}`, url);

    // Construct the URL for the generated QR code image
    const imageUrl = `js-backend.up.railway.app/qrcodes/${filename}`; // Replace with your actual domain

    res.status(200).send({ imageUrl });
  } catch (error) {
    console.error("Error generating QR code:", error);
    res.status(500).send({ error: "Internal server error" });
  }
});

export default qrCodeRoute;
