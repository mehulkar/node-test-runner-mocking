import got from "got";

export async function isUrlOk(url: string) {
  try {
    const res = await got.head(url);
    return res.statusCode === 200;
  } catch (err) {
    return false;
  }
}
