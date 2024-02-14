import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrums from '../components/Breadcrums/Breadcrums';
import ProuductDisplay from '../components/ProductDisplay/ProductDisplay';
import DesciptionBox from '../components/DescriptonBox/DesciptionBox';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';

function Product() {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams();
    const product = all_product.find((e) => e.id === Number(productId));
    // tìm sản phẩm có id == productId, find(e) =>e.id thì id là id có trong mảng all_product
    // nếu trong all_product không có id thì phải đổi tên khác và e có thể đặt là bất kỳ tên nào

    return (
        <div>
            <Breadcrums product={product} />
            <ProuductDisplay product={product} />
            <DesciptionBox />
            <RelatedProducts />
        </div>
    );
}

export default Product;
