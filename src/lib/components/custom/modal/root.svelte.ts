export function createModalState(initial: { isActive: boolean }) {
	let isActive = $state(initial.isActive);
	function getIsActive() {
		return isActive;
	}
	function setIsActive(value: boolean) {
		isActive = value;
	}

	return {
		getIsActive,
		setIsActive
	};
}
