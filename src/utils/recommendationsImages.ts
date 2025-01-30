import daniel from "../assets/daniel.jpeg";
import guillem from "../assets/guillem.jpeg";
import bernat from "../assets/bernat.jpeg";

export enum RecommendationsImagesId {
  DANIEL = "daniel",
  GUILLEM = "guillem",
  BERNAT = "bernat",
}

export const recommendationsImages = {
  [RecommendationsImagesId.DANIEL]: daniel,
  [RecommendationsImagesId.GUILLEM]: guillem,
  [RecommendationsImagesId.BERNAT]: bernat,
};
