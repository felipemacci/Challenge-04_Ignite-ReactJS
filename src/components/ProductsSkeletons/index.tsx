import ProductSkeleton from "./ProductSkeleton";
import { ProductsSkeletonsContainer } from "./styles";

export default function ProductsSkeletons() {
  return (
    <ProductsSkeletonsContainer>
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
    </ProductsSkeletonsContainer>
  )
}