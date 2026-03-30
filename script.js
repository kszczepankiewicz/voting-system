const poll = new Map();

const addOption = option => {
  if (!option) return `Option cannot be empty.`;
  if (poll.has(option)) return `Option "${option}" already exists.`;
  poll.set(option, new Set())
  return `Option "${option}" added to the poll.`
}

const vote = (option, voterId) => {
  if (!poll.has(option)) return `Option "${option}" does not exist.`;
  if (poll.get(option).has(voterId)) return `Voter ${voterId} has already voted for "${option}".`;
  poll.get(option).add(voterId);
  return `Voter ${voterId} voted for "${option}".`
}

const displayResults = () => `Poll Results:\n${Array.from(poll).map(arr => `${arr[0]}: ${arr[1].size} votes`).join('\n')}`;

addOption('Turkey');
addOption('Morocco');
addOption('Spain');

vote('Turkey', 'x');
vote('Turkey', 'y');
vote('Morocco', 'z');
