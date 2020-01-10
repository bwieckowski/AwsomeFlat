import * as React from "react";
import { from } from "design-system/grid/media";

it("render properly ", () => {
    const result = from('desktop');
    expect(result).toEqual('@media(min-width: 1200px)')
});
