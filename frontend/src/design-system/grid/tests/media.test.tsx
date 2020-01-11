import * as React from "react";
import {BreakpointsName, from} from "design-system/grid/media";

it("render properly ", () => {
    const result = from(BreakpointsName.desktop);
    expect(result).toEqual('@media(min-width: 1200px)')
});
