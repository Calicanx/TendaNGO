import TendaNGONav from './TendaNGONav'
import TendaNGOMainHeading from './TendaNGOMainHeading'
import TendaNGOMainContent from './TendaNGOMainContent'
import TendaNGOFooter from './TendaNGOFooter'

import './TendaNGO.css'

export default function TendaNGO() {
    return(
        <>
        <TendaNGONav/>
        <TendaNGOMainHeading/>
        <TendaNGOMainContent/>
        <TendaNGOFooter/>
        </>
    )
}