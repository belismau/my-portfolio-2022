import './Header.css'
import Stack from './Stack';

function Header() {
    return (
        <div className="Header">
            <Stack justifyContent='space-between'>
                <p className='Header-title'>Hi 👋 </p>
                <Stack justifyContent='space-between'>
                    <a style={{ fontSize: 11, color: 'black' }} href='https://se.linkedin.com/in/belissabanovic'> LinkedIn </a>
                    <a style={{ fontSize: 11, color: 'black' }} href='https://github.com/belismau'> Github </a>
                    <a style={{ fontSize: 11, color: 'black' }} href="mailto:belis99@msn.com"> E-mail </a>
                </Stack>
            </Stack>
            <p className='Header-subtitle'>
                I am <span>Belis Sabanovic</span>, a fullstack-developer based in Sweden.
                Check out my work down below!
            </p>
        </div>
    )
}

export default Header;