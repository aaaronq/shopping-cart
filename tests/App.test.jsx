import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../src/components/App";

describe("App", () => {
	it("renders header", () => {
		render(<MemoryRouter> <App /> </MemoryRouter>);
		expect(screen.getByRole("heading").textContent).toMatch(
			/Mall Grab/i
		);
	});
});
