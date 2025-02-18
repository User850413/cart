"use client";

import Image from "next/image";

import $cartIcon from "/public/icons/cart.svg";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const onClickMain = () => {
    router.push("/");
  };

  const onClickHeart = () => {
    router.push("/heart");
  };

  const onClickCartIcon = () => {
    router.push("/cart");
  };

  return (
    <header className="headerWrapper">
      <div>
        <ul>
          <li>
            <button className="goToMain" onClick={onClickMain}>
              메인으로
            </button>
          </li>
          <li>
            <button className="goToHeart" onClick={onClickHeart}>
              찜 목록
            </button>
          </li>
        </ul>
        <button className="goToCart" onClick={onClickCartIcon}>
          <span>
            <Image
              className="cartIcon"
              fill
              src={$cartIcon}
              alt="장바구니로 이동"
            />
          </span>
        </button>
      </div>
    </header>
  );
}
