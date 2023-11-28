import { Link } from 'react-router-dom';
import useBanners from '../../Hooks/useBanners'
const Banner = () => {
    const [banners] = useBanners()
    if (!banners) {
        return <>Loading</>
    }
    const banner = banners.find(banner => banner.isActive === true);
    const { title, name, image, description, coupon_rate, coupon_code } = banner
    return (
        <div>
            <div className="hero" style={{ backgroundImage: `url(${image})` }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content  text-neutral-content">
                    <div className="max-w-md ">
                        <div >
                            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                            <p className="mb-5">{description}</p>
                            <p className='text-2xl'>Save <span className='text-yellow-400 font-bold'>${coupon_rate}</span> with this promo code : {coupon_code}</p>
                            <Link to='/alltestspublic'><button className="btn mt-4 text-white border-none hover:bg-blue-600 bg-blue-500">All Tests</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;