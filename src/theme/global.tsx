import { css, Global } from "@emotion/react";
import Mukta from "@plumbing/assets/fonts/Mukta.ttf";

const globalStyles = () => {
  return (
    <Global
      styles={() => css`
        @font-face {
          font-family: "Mukta";
          font-style: normal;
          font-weight: regular;
          src: url(${Mukta}) format("truetype");
        }
        html,
        body {
          margin: 0;
          padding: 0;
          min-height: 100dvh;
          font-family: "Mukta";
          scroll-behavior: smooth;
          background-color: #f4f6f8;
        }
        body {
          -moz-osx-font-smoothing: grayscale;
          -webkit-text-size-adjust: 100%;
          -webkit-font-smoothing: antialiased;
          font-size: 14px;
          padding-top: 0px;
          margin: 0px;
          font-family: "Mukta";
        }
        * {
          box-sizing: border-box;
          &:before,
          &:after {
            box-sizing: border-box;
          }
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        ul,
        li,
        h6,
        p,
        img,
        figure {
          margin: 0px;
          padding: 0px;
        }
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active {
          box-shadow: 0 0 0 30px white inset !important;
          z-index: 0;
        }
        .swiper {
          width: 100%;
          height: 100%;
        }

        .swiper-slide {
          text-align: center;
          font-size: 18px;
          background: inherit;
          width: 100%;
          height: 100%;
          /* Center slide text vertically */
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .swiper-slide img {
          display: block;
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #fff;
        }
        .swiper-button-prev:after,
        .swiper-button-next:after {
          font-size: 20px;
          box-sizing: border-box;
          color: #000;
          border-radius: 50%;
          padding: 5px;
        }

        .swiper-slide-our-work.swiper-slide-active {
          border-bottom: 5px solid #000 !important;
          border-color: #05035f !important;
          border-bottom-radius: 50px;
          padding-bottom: 5px;
          transition: background-color 0.5s;
        }
        .swiper-slide-our-work.swiper-slide-active (:not) {
          border-bottom: 5px solid #000 !important;
          border-color: #05035f !important;
          border-bottom-radius: 50px;
          padding-bottom: 5px;
          transition: background-color 0.5s;
        }
        .swiper-slide-our-work:not(.swiper-slide-active)::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transition: background-color 0.5s;
          background-color: rgba(
            255,
            255,
            255,
            0.7
          ); /* White overlay with transparency */
          pointer-events: none; /* Ensure it doesn't block interactions */
        }
      `}
    />
  );
};

export { globalStyles };
