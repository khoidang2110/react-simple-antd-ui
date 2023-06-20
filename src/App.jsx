import React from 'react';
import { Card, Tooltip, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

// components
import CardItem from './components/CardItem';
import ModalAddCard from './components/ModalAddCard';

function App() {
  const [todos, setTodos] = React.useState([]);
  const [isOpenModalAddCard, setIsOpenModalAddCard] = React.useState(false);

  function handleOpenModalAddCard() {
    setIsOpenModalAddCard(true);
  }
 
  function handleCloseModalAddCard() {
    setIsOpenModalAddCard(false);
  }

  function handleAddTodo(values) {
    const todoItemn = {
      id: Math.random(),
      title: values.title,
      description: values.description,
    }
    setTodos([...todos, todoItemn]); // add item
  }

  console.log('todos: ', todos)

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
                  <Button shape="circle" icon={<PlusOutlined />} onClick={handleOpenModalAddCard} />
                </Tooltip>
              </>
            }
            style={{
              width: 300,
            }}
            className='cardList'
          >
            {todos.map(todo => (
              <CardItem key={todo.id} todo={todo} />
            ))}
          </Card>
        </div>
      </main>

      {/* {isOpenModalAddCard && (
         <ModalAddCard 
          isOpenModalAddCard={isOpenModalAddCard} 
          handleAddTodo={handleAddTodo} 
          handleCloseModalAddCard={handleCloseModalAddCard} 
        />
      )} */}
      
      <ModalAddCard 
        isOpenModalAddCard={isOpenModalAddCard} 
        handleAddTodo={handleAddTodo} 
        handleCloseModalAddCard={handleCloseModalAddCard} 
      />



      
    </>
  )
}

export default App
