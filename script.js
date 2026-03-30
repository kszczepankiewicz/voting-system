const poll = new Map();

const addOption = option => {
  if (option === '') {
    return `Option cannot be empty.`
  }
  if (!poll.has(option)) {
    poll.set(option, new Set())
    return `Option "${option}" added to the poll.`
  } else {
    return `"${option}" already exists.`
  }
}

const vote = (option, voterId) => {
  if (!poll.has(option)) {
    retrun`Option "${option}" does not exist.`
  } else {
    if (poll[option].has(voterId)) {
      return `Voter ${voterId} has already voted for "${option}"`
    } else {
      poll[option].add(voterId);
      return `Voter ${voterId} voted for "${option}"`
    }
  }
}