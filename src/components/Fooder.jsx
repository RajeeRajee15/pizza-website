import React from 'react'
import card1 from '../assets/img/card1.png';
import card2 from '../assets/img/card2.png';
import card3 from '../assets/img/card3.png';
import card4 from '../assets/img/card4.png';
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { AiFillMail } from "react-icons/ai";

const Fooder = () => {
    return (
        <>
            <section>
                <footer class="footer pt-5 pb-4">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-16 col-md-4 ">
                                <h2 className='fs-1 text-white'>Pizza</h2>
                                <div className="footer-address text-white">

                                    <p>
                                        <FaLocationDot 
                                            className='m-1 '/>
                                            10-14 Perent Road,<br />
                                            Colombo, W11 1EN<br />
                                            Srilanka.
                                    </p>

                                    <p> 
                                        <IoCall 
                                         className='m-1'/> 
                                         0205 334 3671
                                    </p>

                                    <p> 
                                        <AiFillMail 
                                         className='m-1'/>
                                         SAMPLEMAIL@GMAIL.COM
                                    </p>
                                </div>

                            </div>
                                    
                            <div class="col-xs-4 col-md-2 pb-lg-4  ms-auto ">
                                <h6 className='text-white fs-6'>Quick Links</h6>
                                <ul className='list-inline'>
                                    <div className='list-inline-item text-secondary'>
                                    <li >About Us</li>
                                    <li>Contact Us</li>
                                    <li>Career</li>
                                    <li>Check-list</li>
                                    </div>
                                </ul>
                            </div>
                            <div class="col-xs-4 col-md-2">
                                <h6 className='text-white fs-6' >Important links</h6>
                                <ul className='list-inline'>
                                <div className='list-inline-item text-secondary'>
                                    <li className='list-inline-item'>Payment Policy</li>
                                    <li>Privacy Policy</li>
                                    <li>Cookie Policy</li>
                                    <li>Terms & Conditions</li>
                                    </div>
                                </ul>
                            </div>

                            <div class="col-xs-4 col-md-2">
                                <h6 className='text-white fs-6'>Quick Links</h6>
                                <ul className='list-inline'>
                                <div className='list-inline-item text-secondary'>
                                    <li className='list-inline-item'>Visit Example</li>
                                    <li>Visit Example</li>
                                    <li>Visit Example</li>
                                    <li>Visit Example</li>
                                    </div>
                                </ul>
                            </div>
                        </div>

                    </div>



                    
                </footer>

                <div class="container">
                        <div class="row">
                            <div class="col-md-6 py-3 my-3 ">
                                <h4 className='text-white'>Join our newsletter</h4>
                                <form action="#" method="post" class="newsletter-form">
                                    <input className='fooder-input' type="email" name="email" placeholder="Enter e-mail address" required />
                                    <button className='fooder-but' type="submit">Subscribe</button>
                                </form>
                                <p className='text-secondary py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur justo et nunc ultricies, ac consectetur elit consectetur. Proin nec augue id neque suscipit vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                            </div>
                           
                            <div class="col-md-6 ms-auto  text-center">
                                <div className='payment-card pt-5 my-4 '>
                                    <img src={card1} alt=''/>
                                    <img src={card2} alt=''/>
                                    <img src={card3} alt=''/>
                                    <img src={card4} alt=''/>
                                </div>
                                <div className='align items justify content'>
                                <h5 className='  text-white fs-5 fw-bold d-inline-block'>CONNECT US  | </h5>
                                    <i class="ri-facebook-fill  ms-3  f-icons w-20 h-20"></i>
                                    <i class="ri-youtube-fill   ms-3  f-icons"></i>
                                    <i class="ri-pinterest-fill ms-3  f-icons"></i>
                                    <i class="ri-whatsapp-fill  ms-3  f-icons"></i>
                                    <p className=''> &copy; 2009 - 2023 Sample lorim ipsu. All Rights Reserved.</p>
                                </div>
                                    
                                </div>
                        </div>
                    </div>
            </section>

        </>
    )
}

export default Fooder