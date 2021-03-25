// SideJob Type
export type SideJob = {
	organisation: string;
	position: string;
};

export type ControversyArticle = {
	label: string;
	image: URL;
	url: URL;
	publisher: string;
};

export type Controversy = {
	label: string;
	articles: Array<ControversyArticle>;
};

// Candidate Type
export type Candidate = {
	id: number;
	name: string;
	chips: Array<string>;
	image: URL; // maybe we can make a url type based on regex?
	party: string;
	sideJobs: Array<SideJob>;
	polls: Array<Poll>;
	controversies: Array<Controversy>;
	constituency: Constituency;
	partyMatches: Array<PartyMatchType>;
	electionResults: Array<Election>;
	secondVote: Array<StateList>;
};

export type CoreVoteResult = {
	yes: number;
	no: number;
	abstain: number;
	none: number;
};

export interface PartyVoteResult extends CoreVoteResult {
	partyName: string;
	partyTotal: number;
}

export type VoteResult = {
	total: CoreVoteResult;
	partyResult: Array<PartyVoteResult>;
};

// Poll Type
export type Poll = {
	title: string;
	subtitle: string;
	candidateVote: 'yes' | 'no' | 'abstain' | 'none';
	chip: {
		name: string;
		icon: string;
	};
	abstract: string;
	reason: string;
	result: VoteResult;
};

export type Election = {
	candidate: string;
	party: string;
	percentage: number;
	image: URL;
};

export type StateList = {
	name: string;
	electionChance: number;
};

export type Constituency = {
	numberLabel: string;
	label: string;
	postcodes: Array<string>;
};

export type PartyMatchType = {
	name: string;
	image: string;
	filter: string;
	percentage: string;
};

export type NewsInput = {
	newsTitle: string;
	articles: Array<string>;
};