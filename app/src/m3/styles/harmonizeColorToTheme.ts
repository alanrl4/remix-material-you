import { argbFromHex, customColor } from '@material/material-color-utilities'

export default function harmonizeColorToTheme(
	color: string,
	themeColor: string,
	dark?: boolean
) {
	const colorMode = dark ? 'dark' : 'light'
	const harmonizedColor = customColor(argbFromHex(themeColor), {
		value: argbFromHex(color),
		name: 'customColor',
		blend: true,
	})

	return {
		color: {
			main: harmonizedColor[colorMode].color,
			contrastText: harmonizedColor[colorMode].onColor,
		},
		colorContainer: {
			main: harmonizedColor[colorMode].colorContainer,
			constrastText: harmonizedColor[colorMode].onColorContainer,
		},
	}
}
