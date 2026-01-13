declare module "gsap";
declare module "@createjs/easeljs";
declare module "three";
declare module "imagesloaded";
declare module "swiper/react";
declare module "swiper/modules";
declare module "swiper/css";
declare module "swiper/css/effect-cube";

declare namespace JSX {
  interface IntrinsicElements {
    "ion-icon": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      name?: string;
      class?: string;
    };
  }
}
