import React from 'react'
import { MonsterList,MonsterPage} from './Components'
import { BrowserRouter ,Route ,Routes,Link,Outlet}
    from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Menu/>}>
                    <Route index element={<div><h1>Welcome to MonsterCard</h1></div>}/>
                    <Route path='monsters' element={<MonsterList/>}/>
                    <Route path=':monsterID' element={<MonsterPage/>}/>
                </Route>
                <Route path='about' element={<div>about page</div>}/>
            </Routes>
        </BrowserRouter>
    )
}
const Menu =()=>(
    <div>
        <ul>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to='/monsters'>monsters</Link>
            </li>
        </ul>
        <Outlet />
        <footer>
            this is footer
        </footer>
    </div>
    );

export default App;
