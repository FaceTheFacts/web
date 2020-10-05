import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import SubHeading from "./SubHeading";

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

it("renders with correct heading", () => {
	// given
	const subheading = "Sub Heading";

	// when
	act(() => {
		render(<SubHeading name={subheading} />, container);
	});

	// then
	if (container !== null) {
		expect(container.textContent).toBe(subheading);
	}
});
