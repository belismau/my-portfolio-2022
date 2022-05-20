import './Footer.css'
import Stack from './Stack';

function Footer() {
    const FooterLineBreak = () => {
        return (
            <div
                style={{
                margin: '120px 0 0 0',
                height: 2,
                width: '100%',
                background: '#eee'
            }}></div>
        )
    }
    
    return (
        <div className="Footer">
            <FooterLineBreak />
            <Stack justifyContent='space-between'>
                <p className='Footer-content'> © 2022 by Belis Sabanovic. All rights reserved. </p>
                <p className='Footer-content'> Website created with React.js by me. </p>
            </Stack>   
        </div>
    )
}

export default Footer;