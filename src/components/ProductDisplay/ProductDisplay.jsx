import './ProductDisplay.css';
import start_icon from '../Assets/star_icon.png';
import start_dull_icon from '../Assets/star_dull_icon.png';
import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';

function ProuductDisplay(props) {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);

    return (
        <div className="productDisplay">
            <div className="productDisplay-left">
                <div className="productDisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productDisplay-img">
                    <img className="productdisplay-main-img" src={product.image} alt="" />
                </div>
            </div>
            <div className="productDisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={start_icon} alt="" />
                    <img src={start_icon} alt="" />
                    <img src={start_icon} alt="" />
                    <img src={start_icon} alt="" />
                    <img src={start_dull_icon} alt="" />
                    <p>{122}</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                    <div className="productdisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptatem ipsam velit et numquam,
                    consequuntur voluptatibus repellendus dicta, eos dolorum veritatis ea est corporis nulla veniam,
                    deleniti quaerat necessitatibus quas.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button
                    onClick={() => {
                        addToCart(product.id);
                    }}
                >
                    ADD TO CART
                </button>
                <p className="product-display-right-category">
                    <span>
                        Category: <span>Women, T-Shirt, Crop Top</span>
                    </span>
                </p>
                <p className="product-display-right-category">
                    <span>
                        Tags: <span>Modern, Latest</span>
                    </span>
                </p>
            </div>
        </div>
    );
}

export default ProuductDisplay;
