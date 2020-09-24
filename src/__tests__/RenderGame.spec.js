import React from "react";
import { shallow } from "enzyme";

import RenderGame from "../components/RenderGame";

describe("RenderGame", () => {
  const selectionHandler = jest.fn();
  const onClickHandler = jest.fn();
  const wrapper = shallow(
    <RenderGame
      playerName="Emiliano"
      selectionHandler={selectionHandler}
      onClickHandler={onClickHandler}
    />
  );
  it("renders with playerName prop", () => {
    expect(wrapper.find("#player-name").text()).toEqual("Best of luck Emiliano!");
  });

  it("on click the selectionHandler is being called", () => {
    wrapper.find("#Rock").simulate("click");
    expect(selectionHandler).toHaveBeenCalled();
    wrapper.find("#Paper").simulate("click");
    expect(selectionHandler).toHaveBeenCalled();
    wrapper.find("#Scissors").simulate("click");
    expect(selectionHandler).toHaveBeenCalled();
  });

  it("on click the onClickHandler is being called", () => {
    wrapper.find("#back").simulate("click");
    expect(onClickHandler).toHaveBeenCalled();
  });
});