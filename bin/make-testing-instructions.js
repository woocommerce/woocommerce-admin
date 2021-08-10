const axios = require('axios');
const promptly = require('promptly');
const execSync = require('child_process').execSync;
const changelogPath = __dirname + '/../changelog.txt';

const repository = 'woocommerce/woocommerce-admin';

function extractPrNumbers(text) {
	let prs = [];
	let match = text.match(/(#[0-9]+)/g);
	if (match) {
		prs = match;
	}
	return prs.map((pr) => pr.replace('#', ''));
}

async function getPrBody(prNumber) {
	const content = await axios.get(`https://api.github.com/repos/${repository}/pulls/${prNumber}`);
	if (content.status === 200 && content.data.body) {
		return content.data.body;
	}

	return null;
}

function getTestingInstruction(prNumber) {

}

/**
 * Get the commits from the current branch that are not in lastReleasedBranch.
 * We're basically getting unreleased commits. 
 */ 
function getUnreleasedCommits(lastReleaseBranch) {
	const currentBranch = execSync('git branch --show-current').toString().replace("\n", "");
	return execSync(`git log --oneline ${lastReleaseBranch}..${currentBranch}`).toString().replace("\n", "");
}


(async () => {

	const changelog = 
	

	const versions = getVersionsFromChangelog(10);

	const version = await promptly.prompt("Last release branch: ");

	const prNumbers = extractPrNumbers(getUnreleasedCommits(lastReleaseBranch));
console.log(prNumbers);



})();


// console.log(extractPrNumbers(testText));


