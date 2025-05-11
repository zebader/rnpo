import daniel from "../assets/daniel.jpeg";
import guillem from "../assets/guillem.jpeg";
import bernat from "../assets/bernat.jpeg";
import nico from "../assets/nicolas.png";

export enum RecommendationsImagesId {
  DANIEL = "daniel",
  GUILLEM = "guillem",
  BERNAT = "bernat",
  NICO = "nico",
}

export const recommendationsImages = {
  [RecommendationsImagesId.DANIEL]: daniel,
  [RecommendationsImagesId.GUILLEM]: guillem,
  [RecommendationsImagesId.BERNAT]: bernat,
  [RecommendationsImagesId.NICO]: nico,
};
