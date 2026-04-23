import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'


const Login = () => {

  const {login} = useContext(AuthContext);
const navigate = useNavigate();

function hadleLogin() {
  const fakeUser = {
    id: 1,
    name: "John Doe",
    avatar: "https://example.com/avatar.jpg",
  };
  login(fakeUser);
  navigate("/dashboard");
}



return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">
        Login
      </h1>
      <button onClick={hadleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">
        Login
      </button>
    </div>
  )
}

export default Login