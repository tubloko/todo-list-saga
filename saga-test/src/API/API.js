export default class API {
    async fetchData() {
        const response = await fetch('http://localhost:3001/api/getAllTask', {mode: 'cors'});
        return await response.json();
    }

    deleteTask(action) {
        return fetch("http://127.0.0.1:3001/api/deleteTask", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                id: action.id,
            })
        }).then(() => console.log('data was sent'));
    }

    addTask(task) {
        return fetch("http://127.0.0.1:3001/api/addTask", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                task: task,
            })
        }).then(() => console.log('data was sent'));
    }

    checkTask({payload}) {
        const {id, done} = payload;
        return fetch("http://127.0.0.1:3001/api/checkDone", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                id: id,
                done: done,
            })
        }).then(() => console.log('data was sent'));
    }
};
