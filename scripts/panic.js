document.addEventListener('DOMContentLoaded', function () {
	const settingsModal = document.getElementById('settings-modal');

	const setPanicKeyButton = document.getElementById('recordPanic');
	const resetPanicKeyButton = document.getElementById('resetPanic');
	const displayPanicKey = document.querySelector('.panic-key-display');
	let storedSavedKey = localStorage.getItem('savedKey');
	let panicKey = null;
	const redirectURL = 'https://www.google.com'; // May change to be customizable if requested

	const keyNameMapping = {
		KeyA: "A", KeyB: "B", KeyC: "C", KeyD: "D", KeyE: "E", KeyF: "F", KeyG: "G", KeyH: "H", KeyI: "I", KeyJ: "J", KeyK: "K", KeyL: "L", KeyM: "M", KeyN: "N", KeyO: "O", KeyP: "P", KeyQ: "Q", KeyR: "R", KeyS: "S", KeyT: "T", KeyU: "U", KeyV: "V", KeyW: "W", KeyX: "X", KeyY: "Y", KeyZ: "Z", 
    
        Digit0: "0", Digit1: "1", Digit2: "2", Digit3: "3", Digit4: "4", Digit5: "5", Digit6: "6", Digit7: "7", Digit8: "8", Digit9: "9", 
    
        F1: "F1", F2: "F2", F3: "F3", F4: "F4", F5: "F5", F6: "F6", F7: "F7", F8: "F8", F9: "F9", F10: "F10", F11: "F11", F12: "F12", F13: "F13", F14: "F14", F15: "F15", F16: "F16", F17: "F17", F18: "F18", F19: "F19", F20: "F20", F21: "F21", F22: "F22", F23: "F23", F24: "F24", 
    
        Space: "Space", Enter: "Enter", Tab: "Tab", Backspace: "Backspace", Escape: "Escape", Delete: "Delete", CapsLock: "Caps Lock", ShiftLeft: "Left Shift", ShiftRight: "Right Shift", ControlLeft: "Left Ctrl", ControlRight: "Right Ctrl", AltLeft: "Left Alt", AltRight: "Right Alt", ArrowUp: "Up Arrow", ArrowDown: "Down Arrow", ArrowLeft: "Left Arrow", ArrowRight: "Right Arrow", 
    
        Numpad0: "Numpad 0", Numpad1: "Numpad 1", Numpad2: "Numpad 2", Numpad3: "Numpad 3", Numpad4: "Numpad 4", Numpad5: "Numpad 5", Numpad6: "Numpad 6", Numpad7: "Numpad 7", Numpad8: "Numpad 8", Numpad9: "Numpad 9", NumpadAdd: "Numpad +", NumpadSubtract: "Numpad -", NumpadMultiply: "Numpad *", NumpadDivide: "Numpad /", NumpadEnter: "Numpad Enter", NumpadDecimal: "Numpad .", 
    
        ArrowUp: "Up Arrow", ArrowDown: "Down Arrow", ArrowLeft: "Left Arrow", ArrowRight: "Right Arrow", 
    
        ShiftLeft: "Left Shift", ShiftRight: "Right Shift", ControlLeft: "Left Ctrl", ControlRight: "Right Ctrl", AltLeft: "Left Alt", AltRight: "Right Alt", 
        // If you use these,  I don't trust you
        Home: "Home", End: "End", PageUp: "Page Up", PageDown: "Page Down", Insert: "Insert", Delete: "Delete", PrintScreen: "Print Screen", ScrollLock: "Scroll Lock", Pause: "Pause/Break", 
        // Same goes for these
        MediaPlay: "Play", MediaPause: "Pause", MediaStop: "Stop", MediaNextTrack: "Next Track", MediaPrevTrack: "Previous Track", MediaFastForward: "Fast Forward", MediaRewind: "Rewind", MediaEject: "Eject", 
	};
	function getKeyDisplayName(code) {
		return keyNameMapping[code] || code;
	}

	function setPanicKey() {
		setPanicKeyButton.textContent = 'Recording... Press a Key';
		document.removeEventListener('keyup', recordPanicKey);
		document.addEventListener('keyup', recordPanicKey);
	}
	function recordPanicKey(event) {
		let key = event.key.toUpperCase();
		panicKey = event.code;
		localStorage.setItem('savedKey', panicKey);
		storedSavedKey = panicKey;
		key = getKeyDisplayName(panicKey);

		displayPanicKey.textContent = `Current Panic Key: ${key}`;
		setPanicKeyButton.textContent = 'Change Panic Key';

		document.removeEventListener('keyup', recordPanicKey);
		updateEventListener();
	}

	document.addEventListener('click', function () {
		if (settingsModal.style.display == 'none') {
			document.removeEventListener('keyup', recordPanicKey);
			setPanicKeyButton.textContent = 'Press to Record Key...';
		}
	});
	resetPanicKeyButton.addEventListener('click', function () {
		document.removeEventListener('keyup', recordPanicKey);
		localStorage.removeItem('savedKey');
		storedSavedKey = null;
		setPanicKeyButton.textContent = 'Press to Record Key...';
		displayPanicKey.textContent = `Current Panic Key: Not Set`;
	});

	function updateEventListener() {
		document.removeEventListener('keydown', checkPanicKey);
		document.addEventListener('keydown', checkPanicKey);
	}
	function checkPanicKey(event) {
		if (storedSavedKey && event.code === storedSavedKey && document.querySelector('.proxy input') != document.activeElement && settingsModal.style.display == 'none') {
			window.location.href = redirectURL;
		}
	}
	updateEventListener();
	if (storedSavedKey != null) {
		const displayName = getKeyDisplayName(storedSavedKey);
		displayPanicKey.textContent = `Current Panic Key: ${displayName}`;
		setPanicKeyButton.textContent = 'Change Panic Key';
	}
	setPanicKeyButton.addEventListener('click', setPanicKey);
});
