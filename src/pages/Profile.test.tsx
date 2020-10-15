import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { useParams } from "react-router-dom";
import { act } from "react-dom/test-utils";

import Profile from "./Profile";

jest.mock("react-router-dom", () => ({
	...jest.requireActual("react-router-dom"),
	useParams: () => ({
		id: "1",
	}),
}));

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

it("renders with all data", () => {
	act(() => {
		//useParams.mockReturnValue({1})
		render(<Profile />, container);
	});
	if (container !== null) {
		/* expect(container.textContent).toBe(
			"FinanzenHeimatAuswärtigesWirtschaft und EnergieJustizSozialesVerteidigungLandwirtschaftFamilieGesundheitInfrastrukturUmweltBildung/Forschung"
		); */
	}
});
