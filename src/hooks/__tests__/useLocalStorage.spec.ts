import { renderHook } from "@testing-library/react"
import useLocalStorage from "../useLocalStorage"
import { markdownIncludeImage } from "../../constants/test.mocks"

describe('useLocalStorage hook suite ', () => {

    test('should persist date in localStorage', () => {
        const defaultValue = markdownIncludeImage;
        const key = 'selectedMarkdon';
        const {result}  = renderHook( ()=> useLocalStorage(key, defaultValue))
        expect(result.current[0]).toBe(defaultValue);
        expect(localStorage.getItem(key)?.toString()).toMatch(defaultValue);
      });
      
})