import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-900">

            <section
                className="bg-gray-900 text-gray-500 flex flex-col md:flex-row py-8 px-4 md:py-20 gap-8 justify-between max-w-7xl mx-auto">
                <div className="flex flex-col gap-3 ">
                    <div>
                        <img src="/footer-logo.png" alt="footer logo" className=""/>
                    </div>
                    <p>Customer Supports:</p>
                    <h3 className="text-white font-semibold">(629) 555-0129</h3>

                    <p>
                        4517 Washington Ave. <br/> Manchester, Kentucky 39495
                    </p>
                    <p className="text-white font-semibold">info@kinbo.com</p>
                </div>

                <div className="flex flex-col gap-3">
                    <h3 className="text-white font-semibold text-lg">TOP CATEGORY</h3>
                    <ul className="flex flex-col gap-3">
                        <li>Computer & Laptop</li>
                        <li>Smartphone</li>
                        <li>Headphone</li>
                        <li>Accessories</li>
                        <li>Camera & Photo</li>
                        <li>TV & Homes</li>
                        <li className="text-warning-500">
                            <a href="/products">Browse All Product
                                <span>
                            <img src="/ArrowRight.svg"/>
                        </span></a>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col gap-3">
                    <h3 className="text-white font-semibold text-lg">QUICK LINKS</h3>
                    <ul className="flex flex-col gap-3">
                        <li>Shop Product</li>
                        <li>Shopping Cart</li>
                        <li>Wishlist</li>
                        <li>Compare</li>
                        <li>Track Order</li>
                        <li>Customer Help</li>
                        <li className="">About Us
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col gap-3">
                    <h3 className="text-white font-semibold text-lg">DOWNLOAD APP</h3>
                    <div className="flex md:flex-col gap-2">
                        <div className="flex gap-6 p-4 items-center bg-gray-700">
                            <img src="/play-store.png" alt="play store icon"/>
                            <div>
                                <span className="text-sm">Get it now</span>
                                <p className="text-white">Google Play</p>
                            </div>
                        </div>

                        <div className="flex gap-6 p-4 items-center bg-gray-700">
                            <img src="/apple.png" alt="apple store icon"/>
                            <div>
                                <span className="text-sm">Get it now</span>
                                <p className="text-white">App Store</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" flex flex-col gap-3 md:max-w-[400px]">
                    <h3 className="text-white font-semibold text-lg">POPULAR TAGS</h3>

                    <div className="flex gap-3 flex-wrap">
                        {
                            ["Game", "iPhone", "TV", "Asus Laptops", "Macbook", "SSD", "Graphics Card", "Power Bank", "Smart TV", "Speaker", "Tablet", "Microwave", "Samsung"].map(item => (
                                <span
                                    className="p-2 text-sm border-gray-300 border-[0.1px] hover:bg-gray-500 hover:border-white hover:border-[1px] text-white">
                                {item}
                            </span>
                            ))
                        }
                    </div>
                </div>
            </section>

            <div className=" border-gray-100 py-6 w-full grid place-items-center border-t-[0.4px] text-gray-300">
                <p>Kinbo - eCommerce Template © {new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}

export default Footer
