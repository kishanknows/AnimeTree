import axios from "axios";

export async function refreshAnime() {
  try {
    await axios.post(`http://localhost:${process.env.PORT}/anime/genre`);
    console.log("anime updated");
  } catch (error) {
    console.error(error);
  }
}
