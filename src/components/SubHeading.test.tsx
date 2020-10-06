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

it("renders with a button", () => {
	// given
	const subheading = "test";
	const buttonAction = "votes";

	// when
	act(() => {
		render(
			<SubHeading name={subheading} buttonAction={buttonAction} />,
			container
		);
	});

	// then
	if (container !== null) {
		expect(container.getElementsByTagName("ion-button").length).toBe(1);
	}
});

it("renders with an icon", () => {
	// given
	const subheading = "test";
	const icon = "infobutton.svg";

	// when
	act(() => {
		render(<SubHeading name={subheading} icon={icon} />, container);
	});

	// then
	if (container !== null) {
		expect(container.getElementsByTagName("img")[0].src).toContain(
			`/assets/icon/${icon}`
		);
	}
});
