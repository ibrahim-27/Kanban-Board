import {atom} from 'jotai';
import axios from 'axios';


// let tasks = await axios.get('http://localhost:3000/task');
// tasks = tasks.data;

export const tasksAtom = atom([]);