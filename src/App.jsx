import {Layout} from './components/Layout/Layout'
import {AppBar} from './components/AppBar/AppBar'
import {TaskForm} from './components/TaskFrom/TaskForm'
import {TaskList} from './components/TaskList/TaskList'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTasks } from './redux/operations'
import {selectError, selectIsLoading} from './redux/selectors'

export const App = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError)
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch])
  return(
    <Layout>
    <AppBar/>
    <TaskForm/>
    {isLoading && !error && <b>Request in progress... </b>}
    <TaskList/>
    </Layout>
  );
};
