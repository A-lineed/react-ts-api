import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter, useHistory } from "react-router-dom";
import Home from "./Home";

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe("Home", () => {
  it("Deve informar o usuário e ser redirecionado para a página de perfil ", async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    //expect(screen.getByText("Login")).toBeInTheDocument();
    const button = screen.getByRole("button", { name: "Entrar" });
    fireEvent.click(button);
    expect(mockHistoryPush).toHaveBeenCalled();
  });
});
