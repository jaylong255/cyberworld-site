import { v4 as uuidv4 } from "uuid";
import { Image } from "../types";

export const mockGeneratedImages = (): Image[] => {
  return Array.from(new Array(25), (_, i) => ({
    id: uuidv4(),
    url: `https://placekitten.com/${250 + i * 50}/${250 + i * 50}`,
  }));
};
