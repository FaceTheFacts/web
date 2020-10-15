import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { getByTestId } from "@testing-library/react";
// import { act } from "react-dom/test-utils";
import "jest-canvas-mock";

import Profile from "./Profile";

let container: HTMLDivElement | null = null;

beforeEach(() => {
	// setup a DOM element as a render target
	container = document.createElement("div");
	document.body.appendChild(container);
});

afterEach(() => {
	// cleanup on exiting
	if (container !== null) {
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	}
});

test("renders with all data", () => {
	// this will change after we remove the hard coded data
	// we can probably skip most of this and test for the correct API calls
	const candidate = {
		id: "1",
		name: "Philipp Amthor",
		image:
			"https://www.abgeordnetenwatch.de/sites/default/files/styles/opengraph_image/public/politicians-profile-pictures/philipp_amthor.jpg?itok=_-cUhevr",
		party: "CDU/CSU",
	};
	const history = createMemoryHistory({
		initialEntries: [`/politician/${candidate.id}/votes`],
	});
	render(
		<Router history={history}>
			<Profile />
		</Router>,
		container
	);

	if (container !== null) {
		expect(getByTestId(container, "profile-name").textContent).toBe(
			candidate.name
		);

		expect(
			getByTestId(container, "profile-img-url").getAttribute("src")
		).toBe(candidate.image);
	}
});
