import { Hamburger, Logo } from "./Icons"
import { Link } from "react-router-dom"
import MobileMenu from './../../components/mobileMenu';
import { useState } from "react";

const NavbarComponent = () => {
    const [isOpen, setIsopen] = useState(false);
    return (
        <>
            <div className="p-4 bg-[color:var(--color-primary-black)]">
                <div className="flex items-center justify-between font-custom">
                    <Link to={'/'}><Logo /></Link>
                    <div className="flex items-center justify-between space-x-7">
                        <div className="">
                            <Link className="font-custom font-medium non-italic text-sm px-4 py-2 bg-[color:var(--color-primary-pear)] hover:bg-[color:var(--color-button-pear-hover)] active:bg-[color:var(--color-button-pear-click)] text-black rounded-lg truncate" to={'#'} >Sign Up</Link>
                        </div>
                        <div className="cursor-pointer lg:hidden" onClick={() => setIsopen(!isOpen)}>
                            <Hamburger strokeColor="#fafafa"  />
                        </div>
                    </div>
                </div>
            </div>
            <MobileMenu isOpen={isOpen} setIsOpen={setIsopen}/>
            
        </>
    )
}

export default NavbarComponent