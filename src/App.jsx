import { Card, Tooltip, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

// components
import CardItem from './components/CardItem';
import ModalAddCard from './components/ModalAddCard';

const todos = [1, 2, 3, 4]

function App() {
 
  return (
    <>
      <div className="header__container">
        <div className="header__logo" />
        <div className="header__right">
          <div className="header__avatar">
            <img src="https://fascinating-dango-baee13.netlify.app/assets/images/avatar.png" alt="Avatar" />
          </div>
        </div>
      </div>

      <main>
        <div className="container">
          <Card
            title="Default size card"
            extra={
              <>
              <Tooltip placement="top" title="Add card">
                <Button shape="circle" icon={<PlusOutlined />} />
              </Tooltip>
              </>
            }
            style={{
              width: 300,
            }}
            className='cardList'
          >
            {todos.map(todo => (
              <CardItem key={todo} />
            ))}
          </Card>
        </div>
      </main>


      <ModalAddCard />


      
    </>
  )
}

export default App
