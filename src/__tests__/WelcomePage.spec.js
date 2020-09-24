import React from "react";
import { shallow } from "enzyme";

import WelcomePage from "../components/WelcomePage";

describe("RenderGame", () => {
  const playerUpdater = jest.fn();
  const onClickHandler = jest.fn();
  const wrapper = shallow(
    <WelcomePage
      playerUpdater={playerUpdater}
      onClickHandler={onClickHandler}
    />
  );
  
  it("on click the playerUpdater is being called", () => {
    wrapper.find("#input-name").simulate("change");
    expect(playerUpdater).toHaveBeenCalled();
  });

  it("on click the onClickHandler is being called", () => {
    wrapper.find("#play").simulate("click");
    expect(onClickHandler).toHaveBeenCalled();
  });
});