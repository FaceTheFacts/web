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

it("renders with all topic filters", () => {
	act(() => {
		render(<SubHeading name="Sub Heading" />, container);
	});
	if (container !== null) {
		expect(container.textContent).toBe("Sub Heading");
	}

	act(() => {
		render(<SubHeading name="Test Case Title" />, container);
	});
	if (container !== null) {
		expect(container.textContent).toBe("Test Case Title");
	}
});
