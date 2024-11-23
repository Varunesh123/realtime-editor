import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import {v4 as uuidV4} from 'uuid';

const Home = () => {
  const navigate = useNavigate();

  const [roomId, setRoomId] = useState('')
  const [username, setUsername] = useState('')

  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidV4();
    setRoomId(id);
    toast.success('Created a new room');
  }

  const joinRoom = () => {
    if(!roomId || !username){
      toast.error('ROOM ID & username is required');
      return;
    }
    navigate(`/editor/${roomId}`, {
      state: {
        username,
      },
    });
  };

  const handleInputEnter = (e) => {
    if(e.code === 'Enter')
      joinRoom();
  };

  return (
    <div className='homePageWrapper'>
      <div className='fromWrapper'>
        <img
          className='homePageLogo'
          src='/code-sync.png'
          alt='code-sync-log'
        />
        <h4 className='mainLabel'> Paste invitation ROOM ID</h4>
        <div className='inputGroup'>
          <input
            type='text'
            className='inputBox'
            placeholder='ROOM ID'
            onChange={(e) => setRoomId(e.target.value)}
            value={roomId}
            onKeyUp={handleInputEnter}
          />
          <input
            type='text'
            placeholder='USERNAME'
            className='inputBox'
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            onKeyUp={handleInputEnter}
          />
          <button className='btn joinBtn' onClick={joinRoom}>
            join
          </button>
          <span className="createInfo">
              If you don't have an invite then create &nbsp;
              <a
                  onClick={createNewRoom}
                  href=""
                  className="createNewBtn"
              >
                  new room
              </a>
          </span>
        </div>
      </div>
      <footer>
        <h4>
          Built with 💛 &nbsp; by &nbsp;
          <a href="https://github.com/varunesh123">Varunesh Pathak</a>
        </h4>
      </footer>
    </div>
  );
}

export default Home
