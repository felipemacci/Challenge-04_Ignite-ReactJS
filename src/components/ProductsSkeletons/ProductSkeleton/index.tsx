import { ProductSkeletonContainer } from "./styles";

export default function ProductSkeleton() {
  return (
    <ProductSkeletonContainer>
      <div className="main-rectangle"></div>

      <footer>
        <div className="info-rectangle"></div>
        <div className="cart-rectangle"></div>
      </footer>
    </ProductSkeletonContainer>
  )
}