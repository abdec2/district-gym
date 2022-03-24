import classnames from 'classnames';
import { CloseBtn } from './../navbar/Icons'
import { useNavigate } from 'react-router-dom'

type isOpen = {
    isOpen: Boolean,
    setIsOpen: Function
}
const Index = ({ isOpen, setIsOpen }: isOpen) => {
    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        setIsOpen(!isOpen);
        navigate(path);
    }
    return (
        <>
            <div className={classnames('transform top-0 left-0 w-full bg-[color:var(--color-primary-black)] fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 translate-x-full ', { 'translate-x-0': isOpen })}>
                <div className='px-6 py-8 flex items-center justify-end mb-4'>
                    <div className='cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                        <CloseBtn />
                    </div>
                </div>
                <div className='flex items-center justify-center p-7 mb-12'>
                    <div className='mr-1 w-36'>
                        <button className='w-full font-custom font-medium non-italic text-sm px-4 py-2 bg-[color:var(--color-primary-pear)] hover:bg-[color:var(--color-button-pear-hover)] active:bg-[color:var(--color-button-pear-click)] text-black rounded-lg'>Sign Up</button>
                    </div>
                    <div className='ml-1 w-36'>
                        <button className='w-full font-custom font-medium non-italic text-sm px-4 py-2 bg-[color:var(--color-grays-300)] hover:bg-[color:var(--color-grays-400)] active:bg-[color:var(--color-primary-space-gray)] text-black rounded-lg'>Login</button>
                    </div>
                </div>
                <div className='p-10 flex flex-col items-start space-y-10'>
                    <div>
                        <span className='font-custom font-medium not-italic cursor-pointer text-3xl hover:text-[color:var(--color-primary-pear)]' onClick={() => handleNavigation('/')} >Home</span>
                    </div>
                    <div>
                        <span className='font-custom font-medium not-italic cursor-pointer text-3xl hover:text-[color:var(--color-primary-pear)]' onClick={() => handleNavigation('/memberships')} >Memberships</span>
                    </div>
                    <div>
                        <span className='font-custom font-medium not-italic text-3xl cursor-pointer hover:text-[color:var(--color-primary-pear)]' onClick={() => handleNavigation('/contact')} >Contact</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index