import { render, screen } from "@testing-library/react";
import App from "../src/components/App";

describe("App", () => {
	it("renders header", () => {
		render(<App />);
		expect(screen.getByRole("heading").textContent).toMatch(
			/Vite \+ React/i
		);
	});
});
