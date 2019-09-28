function calculateTimeSpent(chores) {
  return chores.map((chore) => {
    return { ...chore, timeSpent: chore.minutes * chore.timesDone }
  })
}

function filterForQA(logs) {
  return logs.filter((log) => log.environment === 'qa')
}

function filterByName(chores, name) {
  return chores.filter((chore) => chore.doneBy === name)
}

function assignTasks(tasks, from, to) {
  return tasks.map((task) => {
    if (task.assignee === from) {
      return { ...task, assignee: to }
    } else {
      return task
    }
  })
}

module.exports = {
  assignTasks,
  calculateTimeSpent,
  filterByName,
  filterForQA,
}
