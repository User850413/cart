import Image, { StaticImageData } from "next/image";

import $cart from "/public/icons/cart.svg";

interface CardProps {
  src: StaticImageData;
  alt: string;
  title: string;
  description: string;
}

export default function Card({ src, alt, title, description }: CardProps) {
  return (
    <div className="cardWrapper">
      <figure className="cardImageSection">
        <Image
          className="cardImage"
          src={src}
          alt={alt}
          fill
          objectFit="cover"
        />
      </figure>
      <div className="cardDescriptionSection">
        <div className="cardTitleSection">
          <h3 className="cardTitle">{title}</h3>
          <p className="cardSubTitle">{description}</p>
        </div>
        <button className="itemToCartButton" aria-label="장바구니에 담기">
          <span>
            <Image src={$cart} alt="장바구니에 담기" fill />
          </span>
        </button>
      </div>
    </div>
  );
}
