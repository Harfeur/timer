import Sound from './sounds.js'
import Events from './events.js'
import Theme from './theme.js'
import { Timer } from './timer.js'
import Controls from './controls.js'
import {
	cards,
	buttonPlay,
	buttonPause,
	secondsDisplay,
	minutesDisplay
} from './elements.js'

const urlParams = new URLSearchParams(window.location.search);

const defaultTimer = urlParams.get('defaultTimer');
if (defaultTimer) minutesDisplay.innerHTML = defaultTimer;

const hideSoundCards = urlParams.get('hideSoundCards');
if (hideSoundCards) cards.style.display = 'none';

const controls = Controls({
	buttonPlay,
	buttonPause
})

const timer = Timer({
	minutesDisplay,
	secondsDisplay,
	resetControls: controls.pause
})

const sounds = Sound()

const theme = Theme()

Events({ timer, controls, sounds, theme })
