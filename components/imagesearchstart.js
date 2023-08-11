export default async function Quickstart() {
  // Imports the Google Cloud client library
  const vision = require("@google-cloud/vision");

  // Creates a client
  const client = new vision.ImageAnnotatorClient();

  // Performs label detection on the image file
  const [result] = await client.labelDetection("./public/img/easter.png");
  const labels = result.labelAnnotations;
  console.log("Labels:");
  labels.forEach((label) => console.log(label.description));
}
