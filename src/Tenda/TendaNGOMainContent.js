import './TendaNGO.css'
import twitter from './pics/twitter.png'
import whatsapp from './pics/whatsapp.png'
import facebook from './pics/facebook.png'
import facebook_2 from './pics/2626269.png'
import instagram from './pics/3621435.png'
import tiktok from './pics/tiktok.png'

export default function TendaNGOMainContent (){
    return (
        <>
        <div className='row'>
            <div className='col-12 e1 center'>
                <p className='e'>Core values at <strong>TendaNGO</strong></p>
            </div>
        </div>
        <div className='row'>
            <div className='col-12 f'>
                <div className='col-6 content_box'>
                    <img className='twitter' src={twitter}></img>
                    <h3 className='acc'>Acountability</h3>
                    <p className='ava'>Availability</p>
                </div>
                <div className='col-6 content_box'>
                    <img className='twitter' src={whatsapp}></img>
                    <h3 className='acc'>Inclusivity and sustainability</h3>
                    <p className='ava'>We have space for everyone</p>
                </div>
            </div>
            <div className='col-12 g'>
                <div className='col-6 content_box'>
                    <img className='twitter' src={facebook_2}></img>
                    <h3 className='acc'>Non-violence</h3>
                    <p className='ava'>no violence</p>
                </div>
                <div className='col-6 content_box'>
                    <img className='twitter' src={instagram}></img>
                    <h3 className='acc'>Global partnership reflected in SDGs.</h3>
                    <p className='ava'>No restrictions</p>
                </div>
            </div>
            <div className='col-12 h'>
                <div className='col-6 content_box'>
                    <img className='twitter' src={facebook}></img>
                    <h3 className='acc'>Free Prior and Informed Consent (FPIC)</h3>
                    <p className='ava_1'>No restrictions</p>
                </div>
                <div className='col-6 content_box'>
                    <img className='twitter' src={tiktok}></img>
                    <h3 className='acc'>Kenya’s Vision 2030</h3>
                    <p className='ava'>We have space for everyone</p>
                </div>
        </div>
    </div>
        </>
    )
}