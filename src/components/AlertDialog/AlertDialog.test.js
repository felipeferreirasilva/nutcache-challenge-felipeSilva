import React from "react";
import { render } from "@testing-library/react";
import AlertDialog from "./AlertDialog";

test("Render AlertDialog", async () => {
  render(<AlertDialog dialogTitle="Dialog Title" dialogText="Dialog Text" />);
});
