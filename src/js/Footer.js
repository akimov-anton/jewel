/**
 * Created by Toha on 07.02.2017.
 */
import React, {Component} from 'react';

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
                                    <a href="#">Ring guide size</a>
                                </li>
                                <li className="Footer__col_option">
                                    <a href="#">Gift certitficates</a>
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
                            <div className="Footer__col_title">CONTACT US</div>
                            <ul className="Footer__col_list">
                                <li className="Footer__col_option">
                                    <a href="#">world4inspiration@gmail.com</a>
                                </li>

                            </ul>
                        </div>
                        <div className="Footer__col">
                            <div className="Footer__col_title">JOIN US</div>
                            <ul className="Footer__col_list">
                                <li className="Footer__col_option">
                                    <a href="#">Text</a>
                                </li>
                                <li className="Footer__col_option">
                                    <a href="#">Text</a>
                                </li>
                                <li className="Footer__col_option">
                                    <a href="#">Text</a>
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