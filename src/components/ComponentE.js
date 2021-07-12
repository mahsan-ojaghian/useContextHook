import React,{useContext} from 'react';
//import ComponentF from './ComponentF';
import {userCotext , ChannelContext} from '../App'
function ComponentE(){
const user = useContext(userCotext);
const channel = useContext(ChannelContext);
return(<div>
 {user} + {channel}
</div>)
}
export default ComponentE;