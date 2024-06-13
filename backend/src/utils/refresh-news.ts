import axios from "axios";

export async function refreshNews() {
  try {
    await axios.post(`http://localhost:${process.env.PORT}/anime/news`);
    console.log("news updated");
  } catch (error) {
    console.log(error);
  }
}
