import {Button } from "../../components/ui/button.jsx";
import {SidebarTrigger} from '../../components/ui/sidebar'
import React from 'react'

function AppHeader(){
    return(
        <div className = 'p-3 w-full shadow flex justify-between items-centre'>
            <SidebarTrigger/>
            <Button> Sign In </Button>
        </div>
    )
}

export default AppHeader;