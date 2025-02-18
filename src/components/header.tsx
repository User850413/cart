"use client";

import Image from "next/image";

import $cartIcon from "/public/icons/cart.svg";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const onClickMain = () => {
    router.push("/");
  };

  const onClickCartIcon = () => {
    router.push("/cart");
  };

  return (
    <header className="headerWrapper">
      <div>
        <button className="goToMain" onClick={onClickMain}>
          메인으로
        </button>
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
