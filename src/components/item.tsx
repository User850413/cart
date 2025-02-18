import Image, { StaticImageData } from "next/image";

interface ItemProps {
  src: StaticImageData;
  alt: string;
  title: string;
  description: string;
}

export default function Item({ src, alt, title, description }: ItemProps) {
  return (
    <div>
      <Image src={src} alt={alt} width={200} height={150} objectFit="cover" />
      <div>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <button>장바구니에 담기</button>
      </div>
    </div>
  );
}
