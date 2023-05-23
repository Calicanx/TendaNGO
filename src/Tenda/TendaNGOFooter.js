import './TendaNGO.css'

export default function TendaFooter(){
    return (
        <div className='row'>
            <div className='col-12 footer_bg'>
                <div className='col-6'>
                    <h1 className='logo_2'>Tenda<span id='black'>NGO</span></h1>
                    <h3 className='sub_logo'>TRANS-ELGON INDIGENOUS DEVELOPMENT AGENCY</h3>
                </div>
                <div className='col-6'>
                    <div className='contact_btn'>Contact Us</div>
                </div>
                <div className='col-12'>
                    <p className='copyright'>©TendaNGO 2023 All rights reserved</p>
                </div>
            </div>
        </div>
    )
}