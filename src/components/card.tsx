import Image, { StaticImageData } from "next/image";

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
          width={200}
          height={150}
          objectFit="cover"
        />
      </figure>
      <div className="cardDescriptionSection">
        <div className="cardTitleSection">
          <h3 className="cardTitle">{title}</h3>
          <p className="cardSubTitle">{description}</p>
        </div>
        <button className="itemToCartButton">장바구니에 담기</button>
      </div>
    </div>
  );
}
