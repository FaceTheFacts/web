// SideJob Type
export type SideJob = {
	id: number;
	organisation: string;
	label: string;
	candidate: number;
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

export type Position = {
	title: string;
	answer: string;
	reason: string;
};
/* export type Bio = {
	id: number;
	name: string;
	image: Array<string>
	party: number;
	office: string;
	focus_topics: Array<string>;
	bio: string;
}; */

export type Politician = {
        "id": number;
        "entity_type": string;
        "label": string;
        "api_url": string;
        "abgeordnetenwatch_url": string;
        "first_name": string;
        "last_name": string;
        "birth_name": string;
        "sex": string;
        "year_of_birth": number;
        "party": Party;
        "party_past": string;
        "deceased": string;
        "deceased_date": string;
        "education": string;
        "residence": string;
        "occupation": string;
        "statistic_questions": number;
        "statistic_questions_answered": number;
        "qid_wikidata": string;
        "field_title": string;
        "related_data": {
            "mandates": {
                "meta": {
                    "description": string;
                },
                "api_path": string;
                "api_path_include": string;
            },
            "candidacies": {
                "meta": {
                    "description": string;
                },
                "api_path": string;
                "api_path_include": string;
            },
            "all_candidacies_mandates": {
                "meta": {
                    "description": string;
                },
                "api_path": string;
                "api_path_include": string;
            },
            "votes": {
                "meta": {
                    "description": string;
                },
                "api_path": string;
                "api_path_include": string;
            }
        }
};

export type Party = {
	"id": number;
	"entity_type": string;
	"label": string;
	"api_url": string;
};

export type Topics = {
	topic: [Topic];
};

export type Topic = {
	'api_url': string;
	'candidacy_mandate': {
		'id': number;
		'entity_type': string;
		'label': string;
		'api_url': string;
	};
	'committee': {
		'id': number;
		'entity_type': string;
		'label': string;
		'api_url': string;
	}
	'committee_role': string;
	'entity_type': string;
	'id': number;
	'label': string;
	'__proto__': Object;
};