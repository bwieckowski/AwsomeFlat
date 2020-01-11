import * as React from "react";
import * as renderer from "react-test-renderer";
import ColWrapper from "design-system/grid/Col";
import 'jest-styled-components';

describe("Col", () => {
    it("renders the heading", () => {
        const result = renderer.create(<ColWrapper sizes={[1, 2, 1, 3, 1]}/>).toJSON();
        expect(result).toMatchSnapshot();
    })
});
