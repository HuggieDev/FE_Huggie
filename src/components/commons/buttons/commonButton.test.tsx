import CommonButton from "./commonButton";
import { render } from "@testing-library/react";

describe("CommonButton Test", () => {
  it("Button Title", () => {
    const utils = render(
      <CommonButton buttonText="Test" onClickEvent={() => {}} />
    );
    utils.getByText("Test");
  });
});
