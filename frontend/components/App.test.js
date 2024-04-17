import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import txt from '../i18n/index.json';

describe('Module 4 Project Tests', () => {
  describe('English Language', () => {
    /*
      👉 TASK 1

      One test is done for you as an example.
    */
    test(`TEXT_HEADING_CREATE_ACCOUNT is visible`, () => {
      render(<App lang="en" />);
      expect(screen.getByText(txt.en.TEXT_HEADING_CREATE_ACCOUNT)).toBeVisible();
    });

    // Testing other text elements
    // test(`${key} is visible`, () => {
    //   render(<App />)
    //   expect(screen.getByText(val)).toBeVisible()
    // })

    // LABEL_USERNAME
    test(`LABEL_USERNAME is visible`, () => {
      render(<App lang="en" />);
      expect(screen.getByLabelText(txt.en.LABEL_USERNAME)).toBeVisible();
    });

    // PLACEHOLDER_USERNAME
    test(`PLACEHOLDER_USERNAME is visible`, () => {
      render(<App lang="en" />);
      expect(screen.getByPlaceholderText(txt.en.PLACEHOLDER_USERNAME)).toBeVisible();
    });
  });

  describe('Spanish Language', () => {
    /*
      👉 TASK 3

      This is done after making the UI multilingual.
    */
    test(`TEXT_HEADING_CREATE_ACCOUNT is visible`, () => {
      render(<App lang="esp" />);
      expect(screen.getByText(txt.esp.TEXT_HEADING_CREATE_ACCOUNT)).toBeVisible();
    });

    // LABEL_USERNAME
    test(`LABEL_USERNAME is visible`, () => {
      render(<App lang="esp" />);
      expect(screen.getByLabelText(txt.esp.LABEL_USERNAME)).toBeVisible();
    });

    // PLACEHOLDER_USERNAME
    test(`PLACEHOLDER_USERNAME is visible`, () => {
      render(<App lang="esp" />);
      expect(screen.getByPlaceholderText(txt.esp.PLACEHOLDER_USERNAME)).toBeVisible();
    });
  });

  describe('getEntriesByKeyPrefix', () => {
    test('can extract the correct data', () => {
      const obj = {
        abc_1: "data_abc_1",
        abc_2: "data_abc_2",
        xyz_1: "data_xyz_1",
        abc_3: "data_abc_3",
      };

      const expectedABC =  [
        ["abc_1", "data_abc_1"],
        ["abc_2", "data_abc_2"],
        ["abc_3", "data_abc_3"],
      ];

      const expectedXYZ = [
        ["xyz_1", "data_xyz_1"],
      ];

      const expectedEmpty = [];

      expect(getEntriesByKeyPrefix(obj, "abc")).toEqual(expectedABC);
      expect(getEntriesByKeyPrefix(obj, "xyz")).toEqual(expectedXYZ);
      expect(getEntriesByKeyPrefix(obj, "foo")).toEqual(expectedEmpty);
    });
  });
});

function getEntriesByKeyPrefix(obj, keyPrefix) {
  return Object.entries(obj).filter(([key]) => key.startsWith(keyPrefix + "_"));
  /*
    👉 TASK 4 part 1

    Implement a function that takes as first argument an object `obj` such as this:

    {
      abc_1: "data_abc_1",
      abc_2: "data_abc_2",
      xyz_1: "data_xyz_1",
      abc_3: "data_abc_3",
    }

    and takes as second argument a string `keyPrefix` such as this: "abc"

    and returns an array of arrays such as this (for the arguments given in the examples above):

    [
      ["abc_1", "data_abc_1"],
      ["abc_2", "data_abc_2"],
      ["abc_3", "data_abc_3"],
    ]

    If the function is passed the same `obj` as above but a `keyPrefix` of "xyz" then it would return:

    [
      ["xyz_1", "data_xyz_1"],
    ]

    If the function is passed the same `obj` as above but a `keyPrefix` of "foo" then it would return the empty array.

    The function looks inside the object `obj`, finds all properties whose property names begin
    with the `keyPrefix` given (followed by an underscore), and reorganizes the information before returning it.
    The properties that match the `keyPrefix` are returned inside an array holding key-value-pair sub-arrays.

  */
}
