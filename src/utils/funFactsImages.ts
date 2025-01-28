import raquelTuna from "../assets/raquel_tuna.jpeg";
import raquelColombia from "../assets/raquel_colombia.webp";
import raquelDog from "../assets/raquel_dog.webp";

export enum FunFactsImagesId {
  TUNA = "tuna",
  COLOMBIA = "colombia",
  DOG = "dog",
}

export const funFactsImages = {
  [FunFactsImagesId.TUNA]: raquelTuna,
  [FunFactsImagesId.COLOMBIA]: raquelColombia,
  [FunFactsImagesId.DOG]: raquelDog,
};
