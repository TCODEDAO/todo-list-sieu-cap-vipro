import './App.css'
import { useState } from 'react'
import { handleShowCreateForm } from './handleShowCreateForm'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastSuccess, toastWarn, toastInfo, toastError } from './toastComponent'
function App() {
  window.onload = function () {
    toastInfo('Chào mừng ')
  }

  const storageJobs = JSON.parse(localStorage.getItem('jobs')) || []
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState(storageJobs)

  const handleChangeInput = (e) => {
    setInput(e.target.value)
  }
  const handleSubmitTodo = (e) => {
    e.preventDefault()
    if (input) {
      setTodos((prev) => {
        const newJobs = [...prev, input]
        const jsonJobs = JSON.stringify(newJobs)
        localStorage.setItem('jobs', jsonJobs)
        console.log(jsonJobs)

        return newJobs
      })
      setInput('')
      toastSuccess('Thêm công việc thành công🍆🍆🍆')
      return
    }
    toastWarn('Nhập công việc đi cu🖕🖕🖕')
  }

  const time = new Date()

  return (

    <>
      <div className="Todos">
        <div className="Todos__Content">
          <div className="Todos__Time">
            <div className="Todos__Time--mdy">
              <div className="date">{time.getDate()}</div>
              <div className="month">{time.getMonth()}</div>
              <div className="year">{time.getFullYear()}</div>
            </div>
            <div className="Todos__Time--days">{new Date().toLocaleString('en-us', { weekday: 'long' })}</div>
          </div>
          <div className="Todos__Work">
            <ul className="Todos__Work--list">
              {todos.map((todo, index) => {
                return (
                  <li className="Todos__Work-element" key={index}>
                    <label htmlFor={index + 1}>
                      <p className="Todos__Work--content">
                        {todo}
                      </p>
                    </label>{' '}
                    <input
                      type="checkbox"
                      id={index + 1}
                      className="checkbox-todos"
                    />{' '}
                    <label className="checkmark" htmlFor={index + 1}></label>
                  </li>
                )
              })}


            </ul>
          </div>
          <div className="Todos__Create">
            <form action="">
              <input type="text" value={input} onChange={(e) => handleChangeInput(e)} />
              <input type="submit" value="create" onClick={(e) => {

                handleSubmitTodo(e)
              }} />
            </form>
          </div>
        </div>
        <div
          className="Todos__Button"
          onClick={(e) => handleShowCreateForm()}
        >
          <div className="Todos__Button--symbol noselect">+</div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
