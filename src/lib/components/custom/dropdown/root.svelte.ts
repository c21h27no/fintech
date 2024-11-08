export function createDropdownState(initial: { isActive: boolean; alignment: 'left' | 'right' | 'center'; transY: number }) {
	let isActive = $state(initial.isActive);
	let transY = $state(initial.transY);

	function getIsActive() {
		return isActive;
	}
	function setIsActive(value: boolean) {
		isActive = value;
	}

	function setTransY(value: number) {
		transY = value;
	}
	function getTransY() {
		return transY;
	}

	return {
		alignment: initial.alignment,
		getIsActive,
		setIsActive,
		getTransY,
		setTransY
	};
}
