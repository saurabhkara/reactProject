import { Link } from "react-router-dom"
const Navigation = () => {
        const cartStyle={
            background:'#f59e0d',
            display:'flex',
            borderRadius:10,
            padding:2
        }

    return (
        <>
           <nav className="container mx-auto flex items-center justify-between py-4">
                
                    <Link  to="/">
                        <img src="/images/logo.png" alt="Logo"  style={{height:45}}/>
                    </Link>
                    <ul className="flex items-center">
                        <li ><Link to="/">Home</Link></li>
                        <li className='ml-6'><Link to="/products">Products</Link></li>
                        <li className='ml-6'>
                            <Link to='/cart'>
                                <div style={cartStyle}>
                                    <span >10</span>
                                    <img src='/images/cart.png' alt="cart-icon" className="ml-2"></img>
                                </div>
                            </Link>
                        </li>
                       
                    </ul>
           </nav>
        </>
    )
}

export default Navigation;