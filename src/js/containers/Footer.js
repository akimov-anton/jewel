/**
 * Created by Toha on 07.02.2017.
 */
import React, {Component} from 'react';
import { Link } from 'react-router';

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <div className="Footer__row">
                    <div className="Footer__container">
                        <div className="Footer__col">
                            <div className="Footer__col_title">INFORMATION</div>
                            <ul className="Footer__col_list">
                                <li className="Footer__col_option">
                                    <Link to="/page/ring_guide_size">
                                        Ring guide size
                                    </Link>
                                </li>
                                <li className="Footer__col_option">
                                    <Link to="/page/gift_certitficates">
                                        Gift certitficates
                                    </Link>
                                </li>
                                <li className="Footer__col_option">
                                    <a href="#"> Jewellery care guides</a>
                                </li>
                                <li className="Footer__col_option">
                                    <a href="#">Returns</a>
                                </li>
                            </ul>
                        </div>
                        <div className="Footer__col">
                            <div className="Footer__col_title">MORE DETAILS</div>
                            <ul className="Footer__col_list">
                                <li className="Footer__col_option">
                                    <a href="#">About us</a>
                                </li>
                                <li className="Footer__col_option">
                                    <a href="#"> Privacy Policy</a>
                                </li>
                                <li className="Footer__col_option">
                                    <a href="#">Terms & Conditions</a>
                                </li>
                                <li className="Footer__col_option">
                                    <a href="#">Secure payment</a>
                                </li>
                                <li className="Footer__col_option">
                                    <a href="#"> Site map </a>
                                </li>
                            </ul>
                        </div>
                        <div className="Footer__col">
                            <div className="Footer__col_title">JOIN US</div>
                            <ul className="Footer__col_list">
                                <li className="Footer__col_option">
                                    <span className="Footer__join_icon Footer__join_icon--fb"></span>
                                </li>
                                <li className="Footer__col_option">
                                    <span className="Footer__join_icon Footer__join_icon--twit"></span>
                                </li>
                                <li className="Footer__col_option">
                                    <span className="Footer__join_icon Footer__join_icon--inst"></span>
                                </li>
                            </ul>
                        </div>
                        <div className="Footer__col Footer__col--contact-us">
                            <div className="Footer__col_title">CONTACT US</div>
                            <ul className="Footer__col_list">
                                <li className="Footer__col_option">
                                    <a href="mailto:world4inspiration@gmail.com" className="Footer__mail">world4inspiration@gmail.com </a>
                                </li>

                            </ul>
                        </div>
                    </div>

                </div>
                <div className="Footer__row">
                    <div className="Footer__copy">
                        <span>Copyright 2017&#169; Marevo</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;