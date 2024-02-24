import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from "../pages/Home/index"
import SignIn from '../pages/SignIn'
import User from '../pages/User'
import SignUp from '../pages/SignUp'
import List from '../pages/List'
import LevelOne from '../pages/LevelOne'
import LevelThree from '../pages/LevelThree'
import LevelTwo from '../pages/LevelTwo'

const Router = () => <BrowserRouter >

    <Routes>
        <Route path="/" exact element={<Home />}>
        </Route>
        <Route path="/signUp" element={<SignUp />}>
        </Route>
        <Route path="/signIn" element={<SignIn />}>
        </Route>
        <Route path="/user/*" element={
            <Routes>
                <Route path="/" element={<User />} />
                <Route path="/list" element={<List />} />
                <Route path='/levelOne' element={<LevelOne />} />
                <Route path='/levelTwo' element={<LevelTwo />} />
                <Route path='/levelThree' element={<LevelThree />} />
            </Routes>
        }>
        </Route>
    </Routes>

</BrowserRouter>

export default Router