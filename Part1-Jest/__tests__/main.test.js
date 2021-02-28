const formatVolumeIconPath = require("../assets/scripts/main")

describe('format method', () => {
	test("icon level 3", () => {
		expect(formatVolumeIconPath(68)).toBe(`./assets/media/icons/volume-level-3.svg`)
	}) 
	test("icon level 2", () => {
		expect(formatVolumeIconPath(39)).toBe(`./assets/media/icons/volume-level-2.svg`)
	}) 
	test("icon level 1", () => {
		expect(formatVolumeIconPath(3)).toBe(`./assets/media/icons/volume-level-1.svg`)
	}) 
	test("icon level 0", () => {
		expect(formatVolumeIconPath(0)).toBe(`./assets/media/icons/volume-level-0.svg`)
	}) 
})