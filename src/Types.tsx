// SideJob Type
export type SideJob = {
	organisation: String;
	position: String;
};

// Candidate Type
export type Candidate = {
	name: String;
	chips: Array<string>;
	image: URL; // maybe we can make a url type based on regex?
	party: String;
	sideJobs: Array<SideJob>;
};

// Vote Type
type Vote = 'yes' | 'no' | 'abstain' | 'none';

// Poll Type
type Poll = {
	title: String;
	subtitle: String;
	candidateVote: Vote;
};