// SideJob Type
export type SideJob = {
	organisation: String;
	position: String;
};

export type ControversyArticle = {
    label: String;
    image: URL;
    url: URL;
    publisher: String;
}

export type Controversy = {
    label: String;
    articles: Array<ControversyArticle>;
}


// Candidate Type
export type Candidate = {
    id: number;
	name: String;
	chips: Array<string>;
	image: URL; // maybe we can make a url type based on regex?
	party: String;
    sideJobs: Array<SideJob>;
    polls: Array<Poll>;
    controversies: Array<Controversy>;
};



export type CoreVoteResult = {
    yes: number;
    no: number;
    abstain: number;
    none: number;
}

export type VoteResult = {
    total: CoreVoteResult
    partyResult: Array<CoreVoteResult>;
}

// Poll Type
export type Poll = {
	title: String;
	subtitle: String;
    candidateVote: String;
    chip: {
        name: String,
        icon: String
    };
    abstract: String;
    reason: String;
    result: VoteResult;
};