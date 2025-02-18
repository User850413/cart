import Image from "next/image";

import $cartIcon from "/public/icons/cart.svg";

export default function Header() {
  return (
    <header className="headerWrapper">
      <div>
        <span>안녕하세요</span>
        <button>
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
